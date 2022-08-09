// 传入文字内容和样式，计算p标签的高度和宽度
const calculateTextSize = (text, style) => {
  const p = document.createElement('p')
  p.style.cssText = style
  p.innerText = text
  document.body.appendChild(p)
  const width = p.offsetWidth
  const height = p.offsetHeight
  document.body.removeChild(p)
  return { width, height }
}