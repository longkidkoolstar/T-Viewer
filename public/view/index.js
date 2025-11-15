import { decodeHTMLFromURL } from '../utils/html.js'

function getEncoded() {
  const qs = new URLSearchParams(window.location.search).get('html')
  if (qs) return qs
  const hash = window.location.hash ? window.location.hash.replace(/^#/, '') : ''
  if (hash) {
    const hp = new URLSearchParams(hash).get('html')
    if (hp) return hp
  }
  return null
}

const encoded = getEncoded()
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
    const mode = new URLSearchParams(window.location.search).get('mode')
    if (mode === 'write') {
      document.open()
      document.write(html)
      document.close()
    } else {
      iframe.srcdoc = html
      iframe.style.display = 'block'
    }
  }
}