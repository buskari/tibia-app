import type { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missingParamError'
import { httpBadRequest } from '../helper/httpHelper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    return httpBadRequest(new MissingParamError('name'))
  }
}
