export const extractSessionId = (encodedString: string) => {
  const decodedString = decodeURIComponent(encodedString)

  const match = decodedString.match(/sessionId=([^;]+)/)
  return match ? match[1] : null
}
