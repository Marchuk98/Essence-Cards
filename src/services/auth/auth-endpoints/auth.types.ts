export type ResponseUserType = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

export type ResponseLoginType = {
  accessToken: string
}

export type RequestLoginType = Omit<RequestRegisterType, 'name'>

export type RequestRegisterType = {
  name?: string
  password: string
  email: string
}

export type ResponseRegisterType = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

export type RequestRecoveryPasswordType = {
  html: string
  email: string
  subject: string
}

export type RequestResetPasswordType = {
  token: string
  password: string
}
