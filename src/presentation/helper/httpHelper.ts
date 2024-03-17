import type { HttpResponse } from '../protocols/http'

export const httpBadRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}
