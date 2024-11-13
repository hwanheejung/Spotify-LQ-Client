import { verifySession } from './session'

interface Auth {
  isAuthenticated: boolean
}

export const auth = async (): Promise<Auth> => {
  const session = await verifySession()

  return { isAuthenticated: !!session }
}
