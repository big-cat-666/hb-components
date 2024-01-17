/**
 * 将一个数字转化为中文描述的字符串
 *
 * @param {number} num - 需要转化的数字
 * @return {string} 数字的中文描述字符串
 */
export function toChineseNumber(num: number) {
  const parts = num
    .toString()
    .replace(/(?=(\d{4})+$)/g, ',')
    .split(',')
    .filter(Boolean)

  const map = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const units = ['', '十', '百', '千']
  function _handleZero(str: string) {
    return str.replace(/零+/, '零').replace(/零$/, '')
  }

  function _transform(n: string) {
    let result = ''
    for (let i = 0; i < n.length; i++) {
      const c = map[Number(n[i])]
      let u = units[n.length - i - 1]
      if (c === '零') {
        u = ''
      }
      result += c + u
    }
    result = _handleZero(result)
    return result
  }

  const bigUnits = ['', '万', '亿']
  let result = ''
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i]
    const c = _transform(p)
    const u = bigUnits[parts.length - i - 1]
    if (c === '') {
      result += '零'
      continue
    }
    result += c + u
  }

  result = _handleZero(result)

  return result
}
