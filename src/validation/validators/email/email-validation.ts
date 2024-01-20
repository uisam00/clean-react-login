import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols'

export class EmailValidation implements FieldValidation {
  constructor(readonly field: string) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(value: string): Error {
    return new InvalidFieldError(this.field)
  }
}
