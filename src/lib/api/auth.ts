'use server'

const handleResponse = async (res: Response) => {
  const text = await res.text()

  if (!res.ok)
    throw new Error(
      `Request failed: ${res.status} - ${res.statusText} - ${text || 'No error message provided'}`,
    )

  if (!text) throw new Error('No response body')

  try {
    return JSON.parse(text)
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    throw new Error(`Failed to parse JSON: ${error.message}`)
  }
}

export const getSpotifyUrl = async () => {
  const res = await fetch(`${process.env.API_HOST}/api/auth/spotify-url`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await handleResponse(res)
  return data.url
}
