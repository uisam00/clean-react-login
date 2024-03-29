import { Authentication, AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/tests'

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params: AuthenticationParams
  callsCount = 0

  auth(params: AuthenticationParams): Promise<AccountModel> {
    this.params = params
    this.callsCount++

    return Promise.resolve(this.account)
  }
}
