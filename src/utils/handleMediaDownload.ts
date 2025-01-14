import { getToken } from './userUtils'

export const handleMediaDownload = async (path: string, fileName:string = '') => {
  const token = await getToken()

  const anchor = document.createElement('a')
  document.body.appendChild(anchor)

  const headers = new Headers()
  headers.append('Authorization', `Bearer ${token?.token}`)

  try {
    const response = await fetch(`${path}`, {
      headers,
    })
    const blobby = await response.blob()
    const objectUrl = window.URL.createObjectURL(blobby)

    anchor.href = objectUrl
    anchor.download = fileName === '' ? path : fileName 
    anchor.click()

    window.URL.revokeObjectURL(objectUrl)
  } catch (error) {
    console.log(error)
  }
}
