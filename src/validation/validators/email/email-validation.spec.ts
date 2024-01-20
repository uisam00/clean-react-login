import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from './email-validation'

import faker from 'faker'

type SutTypes = {
  fieldName?: string
}

const makeSut = ({ fieldName = faker.database.column() }: SutTypes = {}) => new EmailValidation(fieldName)

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const fieldName = faker.database.column()
    const sut = makeSut({ fieldName })
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError(fieldName))
  })

  test('Should return falsy if email is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
