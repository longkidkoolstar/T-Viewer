export function encodeHTMLForURL(html) {
  return encodeURIComponent(html)
}
export function decodeHTMLFromURL(encoded) {
  return decodeURIComponent(encoded || '')
}