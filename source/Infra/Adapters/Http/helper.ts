import { HttpResponse, HttpRestAnswer } from 'app/definitions'

/**
 * @param {HttpResponse} response
 * @return {HttpRestAnswer}
 */
export function extractData (response: HttpResponse): HttpRestAnswer {
  return response.data as HttpRestAnswer
}
