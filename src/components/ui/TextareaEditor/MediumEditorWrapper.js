// @flow
/* global HTMLElement SyntheticInputEvent */

import { PureComponent } from 'react'

import elem from '../../../utils/elem'

// $FlowFixMe
import 'medium-editor/dist/css/medium-editor.css'
// $FlowFixMe
import 'medium-editor/dist/css/themes/default.css'

const MediumEditor = require('medium-editor')

type Props = {
  text: string,
  html: string,
  charLimit: number,
  linesLimit?: number,
  id: string | number,
  onChange: (string, string) => void,
  onFocus: (target: Object) => void,
  onBlur: (target: Object) => void,
  options?: Object
}

const getCropText = (text: string, charLimit: number, currentCount: number): string => (
  text.substring(0, Math.min(charLimit, text.length, charLimit - currentCount))
)

const getDelimitedHTML = (initialHTML: HTMLElement, charLimit: number, initialTextLength: number = 0): HTMLElement => {
  const getClone = (parent, node) => {
    if (!node || !parent || textCount > charLimit) return
    const nodeCopy = node.cloneNode(false)
    parent.appendChild(nodeCopy)
    if (node.childNodes.length === 0) {
      let content = node.textContent
      nodeCopy.textContent = getCropText(content, charLimit, textCount)
      textCount += content.length
      return
    }
    node.childNodes.forEach(it => getClone(nodeCopy, it))
  }

  let textCount = initialTextLength

  const tmpContainer = document.createElement('div')
  getClone(tmpContainer, initialHTML)
  return tmpContainer
}

const pasteWithCharLimitExtension = (charLimit: number) => {
  return MediumEditor.extensions.paste.extend({
    cleanPastedHTML: true,
    doPaste: function (pastedHTML, pastedPlain, editable) {
      // handle case when clean Paste
      const selectionCount = MediumEditor.selection.getSelectionRange(this.document).toString().length
      pastedPlain = getCropText(pastedPlain, charLimit + selectionCount, editable.textContent.length)
      MediumEditor.extensions.paste.prototype.doPaste.call(this, pastedHTML, pastedPlain, editable)
    },
    pasteHTML: function (html, options) {
      options = MediumEditor.util.defaults({}, options, {
        cleanAttrs: this.cleanAttrs,
        cleanTags: this.cleanTags,
        unwrapTags: this.unwrapTags
      })

      let elList, workEl, i, fragmentBody, pasteBlock = this.document.createDocumentFragment() // eslint-disable-line one-var
      const currentText = this.base.elements[0].textContent
      pasteBlock.appendChild(this.document.createElement('body'))

      fragmentBody = pasteBlock.querySelector('body')
      fragmentBody.innerHTML = html

      this.cleanupSpans(fragmentBody)

      elList = fragmentBody.querySelectorAll('*')
      for (i = 0; i < elList.length; i += 1) {
        workEl = elList[i]
        if (workEl.nodeName.toLowerCase() && this.getEditorOption('targetBlank') === 'a') {
          MediumEditor.util.setTargetBlank(workEl)
        }

        MediumEditor.util.cleanupAttrs(workEl, options.cleanAttrs)
        MediumEditor.util.cleanupTags(workEl, options.cleanTags)
        MediumEditor.util.unwrapTags(workEl, options.unwrapTags)
      }
      const selectionCount = MediumEditor.selection.getSelectionRange(this.document).toString().length
      const cropFragment = getDelimitedHTML(fragmentBody, charLimit + selectionCount, currentText.length)

      MediumEditor.util.insertHTMLCommand(this.document, cropFragment.innerHTML.replace(/&nbsp;/g, ' '))
    }
  })
}

class MediumEditorWrapper extends PureComponent<Props> {
  medium: MediumEditor
  input: HTMLElement

  componentDidMount = () => {
    if (!this.input) return
    const subscribeFunction:((input: *) => * => void) = fun => event => fun(this.input)
    const { charLimit, options, html, text, id, onChange, onFocus, onBlur } = this.props
    const defaultOptions = {}
    if (charLimit != null) {
      const PasteWithCharLimitExtension = pasteWithCharLimitExtension(charLimit)
      defaultOptions.extensions = {
        paste: new PasteWithCharLimitExtension()
      }
    }
    this.medium = new MediumEditor(`.editable-${id}`, { ...defaultOptions, ...options })
    this.medium.setContent(html || text)

    if (options && !options.disableEditing) {
      if (charLimit != null) {
        this.medium.on(this.input, 'keypress', (event: SyntheticInputEvent<>) => {
          const selectionCount = MediumEditor.selection.getSelectionRange(document).toString().length
          if (this.input.textContent.length >= charLimit + selectionCount) {
            event.preventDefault()
            event.stopPropagation()
          }
        })
      }

      this.medium.subscribe('editableInput', event => {
        const { innerText, innerHTML } = this.input
        onChange(innerText || '', innerHTML)
      })

      this.medium.subscribe('focus', subscribeFunction(onFocus))
      this.medium.subscribe('blur', subscribeFunction(target => onBlur(target)))
    }

    this.setAutosize()
  }

  componentDidUpdate = () => {
    this.medium.restoreSelection()
  }

  componentWillUnmount = () => {
    if (this.medium) {
      this.medium.destroy()
    }
  }

  setAutosize = () => {
    const lineHeight = 44.4
    const maxLines = this.props.linesLimit

    if (maxLines) {
      const maxHeight = `${maxLines * lineHeight}px`
      this.input.style.maxHeight = maxHeight
    }
  }

  render () {
    const { id, options } = this.props
    if (this.medium) {
      this.medium.saveSelection()
    }
    return elem(
      `editable-${id} ${options && options.disableEditing ? '' : 'editable'}`,
      { style: { minHeight: 100 }, ref: node => { this.input = node } }
    )()
  }
}

export default MediumEditorWrapper
