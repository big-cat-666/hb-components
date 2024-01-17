/**
 * 检查给定字符串是否是有效的HTTP URL
 *
 * @param {string} str - 需要检查的字符串
 * @return {boolean} 如果字符串是有效的HTTP URL，返回true，否则返回false
 */
export function isValidHttpUrl(str: string) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i',
  )
  return pattern.test(str)
}
