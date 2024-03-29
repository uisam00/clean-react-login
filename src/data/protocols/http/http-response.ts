export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  serverUnavailable = 503,
  serverError = 500,
  configRequestError = 6606,
}
export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}
