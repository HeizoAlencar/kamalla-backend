export const  UserRole = {
    ADMIN:"ADMIN",
    STUDENT:"STUDENT",
    TEACHER:"TEACHER"
} as const

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

export const Gender = {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
} as const

export type Gender = (typeof Gender)[keyof typeof Gender]
