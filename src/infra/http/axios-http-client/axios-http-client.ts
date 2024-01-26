import { HttpPostClient, HttpPostParams, HttpResponse, HttpStatusCode } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    let httpResponse
    try {
      httpResponse = await axios.post(params.url, params.body)
    } catch (error) {
      console.log(error.request)

      if (error.response) {
        httpResponse = error.response
      } else if (error.request) {
        httpResponse = {
          status: HttpStatusCode.serverUnavailable,
        }
      } else {
        httpResponse = {
          status: HttpStatusCode.configRequestError,
        }
      }
    }

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    }
  }
}
