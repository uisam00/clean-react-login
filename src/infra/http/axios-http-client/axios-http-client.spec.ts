import { AxiosHttpClient } from './axios-http-client'
import { mockAxios, mockHttpResponse } from '@/infra/test'
import axios from 'axios'
import { mockPostRequest } from '@/data/tests'
import { HttpStatusCode } from '@/data/protocols/http'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios,
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })

  test('Should return the correct statusCode and body on failure', () => {
    const { sut, mockedAxios } = makeSut()
    mockedAxios.post.mockRejectedValueOnce({
      response: mockHttpResponse,
    })
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })

  test('Should return the correct status code when there is no response but has request in error body', async () => {
    const { sut, mockedAxios } = makeSut()
    mockedAxios.post.mockRejectedValueOnce({ response: undefined, request: {} })

    const error = await sut.post(mockPostRequest())
    expect(error).toEqual({
      statusCode: HttpStatusCode.serverUnavailable,
    })
  })

  test('Should return the correct status code when there is no response and request in error body', async () => {
    const { sut, mockedAxios } = makeSut()
    mockedAxios.post.mockRejectedValueOnce({ response: undefined, request: undefined })

    const error = await sut.post(mockPostRequest())
    expect(error).toEqual({
      statusCode: HttpStatusCode.configRequestError,
    })
  })
})
