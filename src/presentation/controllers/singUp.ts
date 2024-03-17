import type { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missingParamError'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    return {
      statusCode: 400,
      body: new MissingParamError('name')
    }
  }
}
