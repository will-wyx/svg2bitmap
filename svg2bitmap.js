function svg2bitmap (svgDom, type, cb) {
  // 创建 svg 容器
  const container = document.createElement('div')
  // 将 svg 元素添加到容器中
  container.appendChild(svgDom.cloneNode(true))
  // 取得 svg 元素 html 文本
  const svgHtml = container.innerHTML
  // 生成 svg 格式的 dataURL
  const svgDataURL = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgHtml)))}`

  // 创建 canvas 元素
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = svgDom.clientWidth
  canvas.height = svgDom.clientHeight

  // 除 png 格式需要填充背景
  if (type !== 'image/png') {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  // 创建图片元素
  const image = new Image()
  image.onload = () => {
    try {
      ctx.drawImage(image, 0, 0)
      const dataURL = canvas.toDataURL(type)
      cb(dataURL)
    } catch (e) {

    }
  }
  // 绑定图片 src
  image.src = svgDataURL

  cb('dataURL')
}
