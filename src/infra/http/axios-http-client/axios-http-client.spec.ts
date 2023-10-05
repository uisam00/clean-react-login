import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('', () => {
  test('Should call axios with correct URL and Verb', async () => {
    const url = faker.internet.url()
    const sut = makeSut()
    await sut.post({ url: url })
    expect(mockedAxios.post).toHaveBeenCalledWith(url)
  })
})
