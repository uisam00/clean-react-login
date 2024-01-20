import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validation'

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const fieldName = 'field'
    const sut = new MinLengthValidation(fieldName, 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError(fieldName))
  })

  test('Should return falsy if value is valid', () => {
    const sut = new MinLengthValidation('field', 5)
    const error = sut.validate('12345')
    expect(error).toBeFalsy()
  })
})
