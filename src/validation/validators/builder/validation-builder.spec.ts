import { EmailValidation, RequiredFieldValidation, MinLengthValidation } from '@/validation/validators'
import { ValidationBuilder as sut } from './validation-builder'
import faker from 'faker'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const filedName = faker.database.column()
    const validators = sut.field(filedName).required().build()
    expect(validators).toEqual([new RequiredFieldValidation(filedName)])
  })

  test('Should return EmailValidation', () => {
    const filedName = faker.database.column()
    const validators = sut.field(filedName).email().build()
    expect(validators).toEqual([new EmailValidation(filedName)])
  })

  test('Should return MinLengthValidation', () => {
    const filedName = faker.database.column()
    const length = faker.random.number()
    const validators = sut.field(filedName).min(length).build()
    expect(validators).toEqual([new MinLengthValidation(filedName, length)])
  })

  test('Should return a list of validators', () => {
    const filedName = faker.database.column()
    const length = faker.random.number()
    const validators = sut.field(filedName).required().min(length).email().build()
    expect(validators).toEqual([
      new RequiredFieldValidation(filedName),
      new MinLengthValidation(filedName, length),
      new EmailValidation(filedName),
    ])
  })
})
