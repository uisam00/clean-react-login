import { FieldValidation } from '@/validation/protocols'
import { RequiredFieldError } from '@/validation/errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly filed: string) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(value: string): Error {
    return new RequiredFieldError()
  }
}
