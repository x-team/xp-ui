// @flow

import React from 'react'

import '../../styles/reset'

const cmz = require('cmz')

const table = cmz(`
  & {
    padding: 1rem 2rem
  }

  & table {
    width: 100%
  }

  & table th {
    padding: .7rem
  }

  & table td {
    border: 1px solid silver
    padding: .6rem
  }

  & table td:first-child {
    width: 200px
  }
`)

const Reset = () => (
  <div className={table}>
    <table>
      <thead>
        <tr>
          <th>HTML element</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&lt;h1&gt;</td>
          <td><h1>Lorem Ipsum</h1></td>
        </tr>
        <tr>
          <td>&lt;h2&gt;</td>
          <td><h2>Lorem Ipsum</h2></td>
        </tr>
        <tr>
          <td>&lt;h3&gt;</td>
          <td><h3>Lorem Ipsum</h3></td>
        </tr>
        <tr>
          <td>&lt;h4&gt;</td>
          <td><h4>Lorem Ipsum</h4></td>
        </tr>
        <tr>
          <td>&lt;h5&gt;</td>
          <td><h5>Lorem Ipsum</h5></td>
        </tr>
        <tr>
          <td>&lt;h6&gt;</td>
          <td><h6>Lorem Ipsum</h6></td>
        </tr>
        <tr>
          <td>&lt;p&gt;</td>
          <td><p>Lorem Ipsum</p></td>
        </tr>
        <tr>
          <td>&lt;ul&gt;</td>
          <td>
            <ul>
              <li>unordered list</li>
              <li>unordered list</li>
              <li>unordered list</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>&lt;ol&gt;</td>
          <td>
            <ol>
              <li>ordered list</li>
              <li>ordered list</li>
              <li>ordered list</li>
            </ol>
          </td>
        </tr>
        <tr>
          <td>&lt;hr&gt;</td>
          <td><hr /></td>
        </tr>
        <tr>
          <td>&lt;a&gt;</td>
          <td><a>Lorem Ipsum</a></td>
        </tr>
        <tr>
          <td>&lt;a href='/'&gt;</td>
          <td><a href='/'>Lorem Ipsum</a></td>
        </tr>
        <tr>
          <td>&lt;strong&gt;</td>
          <td><strong>Lorem Ipsum</strong></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan='2'>To do: provide more examples for all relevant elements...</td>
        </tr>
      </tfoot>
    </table>
  </div>
)

export default Reset
