import { FieldValidation } from '../protocols'

export class FieldValidationSpy implements FieldValidation {
  error: Error = null

  constructor(readonly field: string) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(value: string): Error {
    return this.error
  }
}
