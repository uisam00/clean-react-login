import { Validation } from '@/presentation/protocols/validation'
import { FieldValidation } from '@/validation/protocols'

export class ValidationComposite implements Validation {
  private constructor(private readonly validators: FieldValidation[]) {}

  validate(filedName: string, fieldValue: string): string {
    const validators = this.validators.filter((v) => v.field === filedName)
    for (const validator of validators) {
      const error = validator.validate(fieldValue)

      if (error) return error.message
    }
  }

  static build(validators: FieldValidation[]) {
    return new ValidationComposite(validators)
  }
}
