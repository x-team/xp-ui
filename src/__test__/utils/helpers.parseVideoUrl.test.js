/* global test, describe, expect */
import {
  ParsedVideoUrlType,
  parseVideoUrl
} from '../../utils/helpers'

describe('#parseVideoUrl()', () => {
  test('Should be an instance of Function', () => {
    expect(parseVideoUrl).toBeInstanceOf(Function)
  })

  describe('Support for YOUTUBE videos format', () => {
    const videoIdMock: string = 'R6NUFRNEai4'
    const resultMock: ParsedVideoUrlType = {
      videoId: 'R6NUFRNEai4',
      service: 'youtube',
      poster: '//img.youtube.com/vi/R6NUFRNEai4/maxresdefault.jpg'
    }

    test('Supports the format "http://www.youtube.com/watch?v={videoId}"', () => {
      const result = parseVideoUrl(`http://www.youtube.com/watch?v=${videoIdMock}`)
      expect(result).toMatchObject(resultMock)
    })

    test('Supports the format "http://youtu.be/{videoId}"', () => {
      const result = parseVideoUrl(`http://youtu.be/${videoIdMock}`)
      expect(result).toMatchObject(resultMock)
    })

    test('Supports the format "https://youtube.googleapis.com/v/{videoId}"', () => {
      const result = parseVideoUrl(`https://youtube.googleapis.com/v/${videoIdMock}`)
      expect(result).toMatchObject(resultMock)
    })

    test('Supports the format "https://www.youtube.com/embed/{videoId}"', () => {
      const result = parseVideoUrl(`https://www.youtube.com/embed/${videoIdMock}`)
      expect(result).toMatchObject(resultMock)
    })
  })

  describe('Support for VIMEO videos format', () => {
    const videoIdMock: string = '25451551'
    const resultMock: ParsedVideoUrlType = {
      videoId: '25451551',
      service: 'vimeo',
      poster: undefined
    }

    test('Supports the format "http://vimeo.com/{videoId}"', () => {
      const result = parseVideoUrl(`http://vimeo.com/${videoIdMock}`)
      expect(result).toMatchObject(resultMock)
    })

    test('Supports the format "http://player.vimeo.com/video/{videoId}"', () => {
      const result = parseVideoUrl(`http://player.vimeo.com/video/${videoIdMock}`)
      expect(result).toMatchObject(resultMock)
    })

    test('Supports relative url format like //player.vimeo.com/video/{videoId}', () => {
      const result = parseVideoUrl(`//player.vimeo.com/video/${videoIdMock}`)
      expect(result).toMatchObject(resultMock)
    })
  })
})
