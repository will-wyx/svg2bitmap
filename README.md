# svg2bitmap

svg 元素转位图格式 dataURL

支持转成 `image/png` 格式的 dataURL

## 使用

```html
<script src="svg2bitmap.js"></script>
```

```javascript
svg2bitmap(document.getElementById('svg'), 'image/png', (dataURL) => {
  const img = document.getElementById('img')
  img.src = dataURL
})
```

## 实现原理

1. 取得 svg 元素的 html 文本
2. 调用  window.btoa 创建 base-64 编码的字符串，并生成 dataURL
3. 生成 Image 对象
4. canvas 嵌入 Image
5. canvas 转 dataURL

