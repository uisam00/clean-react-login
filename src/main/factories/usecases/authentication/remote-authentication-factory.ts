import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { Authentication } from '@/domain/usecases'
import { makeApiBaseUrlFactory, makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(`${makeApiBaseUrlFactory()}/login`, makeAxiosHttpClient())
}
