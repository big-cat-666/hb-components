/**
 * 计算文本宽度
 * @param {String} text 文本
 * @param {Number} buffer 缓冲距离
 * @param {Number} fontSize 字体大小
 * @returns 文本宽度
 */

export function getLengthOfText(
  text: string,
  buffer = 100,
  fontSize = 16,
): string {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  ctx!.font = fontSize + 'px Microsoft YaHei'
  return `${ctx!.measureText(text).width + buffer}px`
}
