import { FieldValidation } from '@/validation/protocols'
import { RequiredFieldValidation } from '@/validation/validators'

export class ValidationBuilder {
  private constructor(
    private readonly fieldName,
    private readonly validators: FieldValidation[],
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required(): ValidationBuilder {
    this.validators.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  build(): FieldValidation[] {
    return this.validators
  }
}