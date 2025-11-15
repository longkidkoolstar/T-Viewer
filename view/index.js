import { decodeHTMLFromURL } from '../utils/html.js'
const params = new URLSearchParams(window.location.search)
const encoded = params.get('html')
const iframe = document.getElementById('frame')
const error = document.getElementById('error')
if (!encoded) {
  error.style.display = 'block'
} else {
  let html = ''
  try {
    html = decodeHTMLFromURL(encoded)
  } catch (e) {
    html = ''
  }
  if (!html) {
    error.style.display = 'block'
  } else {
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    iframe.src = url
    iframe.style.display = 'block'
  }
}