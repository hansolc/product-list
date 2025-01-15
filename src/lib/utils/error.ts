import { ErrorResponse } from '@/types/actions'

export const printErrorConsole = (error: unknown) => {
  if (error instanceof Error) console.error(error.message)
  else console.error('Unknown error occured!')
}

export const handleError = (error: unknown): ErrorResponse => {
  if (error instanceof Error) {
    return {
      status: 'error',
      error: error.message,
    }
  } else {
    return {
      status: 'error',
      error: 'Unknown error occured!',
    }
  }
}
