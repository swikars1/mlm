/** @params { base64EncodedData : { type: String }}
    @return { Blnary large object }
**/

const base64ToBlob = base64EncodedData => {
  let byteString = atob(base64EncodedData.split(',')[1])

  let ab = new ArrayBuffer(byteString.length)

  let ia = new Uint8Array(ab)

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ab], { type: 'image/jpeg' })
}

export default base64ToBlob
