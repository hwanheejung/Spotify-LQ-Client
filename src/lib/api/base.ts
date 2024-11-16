'use server'

import { RequestInit } from 'next/dist/server/web/spec-extension/request'

const ERRORS = {
  FETCH_FAILED: '데이터를 불러오는데 실패했습니다.',
  SAVE_FAILED: '데이터를 저장하는데 실패했습니다.',
  DELETE_FAILED: '데이터를 삭제하는데 실패했습니다.',
}

const getBaseUrl = (useMocked: boolean) =>
  useMocked ? 'http://localhost:3001' : process.env.API_HOST

const fetchApi = async (
  path: string,
  options: RequestInit,
  useMocked: boolean,
  errorMessage: string,
) => {
  const fetchOptions = {
    ...options,
    headers: {
      'content-type': 'application/json',
      ...options?.headers,
    },
    credentials: 'include' as RequestCredentials,
  }

  const res = await fetch(getBaseUrl(useMocked) + path, fetchOptions)

  if (!res.ok)
    throw new Error(
      `[ERROR] ${res.status} - ${res.statusText}. ${errorMessage}`,
    )
  console.log('Response Headers:', res.headers)

  return res.json()
}

export const get = async (
  path: string,
  options: RequestInit = {},
  useMocked = false,
) =>
  fetchApi(
    path,
    {
      ...options,
      method: 'GET',
    },
    useMocked,
    ERRORS.FETCH_FAILED,
  )

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
    },
    useMocked,
    ERRORS.SAVE_FAILED,
  )

export const put = async (
  path: string,
  options: RequestInit = {},
  useMocked = false,
) =>
  fetchApi(
    path,
    {
      ...options,
      method: 'PUT',
    },
    useMocked,
    ERRORS.SAVE_FAILED,
  )

export const deleteApi = async (
  path: string,
  options: RequestInit = {},
  useMocked = false,
) =>
  fetchApi(
    path,
    {
      ...options,
      method: 'DELETE',
    },
    useMocked,
    ERRORS.DELETE_FAILED,
  )
