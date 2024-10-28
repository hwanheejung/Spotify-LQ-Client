import { RequestInit } from 'next/dist/server/web/spec-extension/request'

const getBaseUrl = (useMocked: boolean) =>
  useMocked ? 'http://localhost:3001' : process.env.API_HOST

const fetchApi = async (
  path: string,
  options: RequestInit,
  useMocked: boolean,
  errorMessage: string,
) => {
  const res = await fetch(getBaseUrl(useMocked) + path, options)

  if (!res.ok) throw new Error(errorMessage)

  return res.json()
}

export const get = async (
  path: string,
  options: RequestInit = {},
  useMocked = false,
) => fetchApi(path, options, useMocked, '데이터를 불러오는데 실패했습니다.')

export const post = async (
  path: string,
  options: RequestInit = {},
  useMocked = false,
) =>
  fetchApi(
    path,
    {
      ...options,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    },
    useMocked,
    '데이터를 저장하는데 실패했습니다.',
  )
