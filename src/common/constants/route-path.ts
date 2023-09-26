export const PATH = {
  LOGIN: '/login',
  REGISTRATION: '/registration',
  NEW_PASSWORD: '/recover-password/:token',
  PASSWORD_RECOVERY: '/password-recovery',
  CHECK_EMAIL: '/check-email',
  VERIFY: '/confirm-email/:code',
  PROFILE: '/profile',
  PACKS: '/packs',
  CARDS: '/cards',
  LEARN: '/learn',
  ID: '/:id',
  ERROR: '/404',
} as const
