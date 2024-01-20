import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validation'

import faker from 'faker'

type SutTypes = {
  fieldName?: string
}

const makeSut = ({ fieldName = faker.database.column() }: SutTypes = {}) => new MinLengthValidation(fieldName, 5)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const fieldName = 'field'
    const sut = makeSut({ fieldName })
    const error = sut.validate(faker.random.alphaNumeric(4))
    expect(error).toEqual(new InvalidFieldError(fieldName))
  })

  test('Should return falsy if value is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(5))
    expect(error).toBeFalsy()
  })
})
