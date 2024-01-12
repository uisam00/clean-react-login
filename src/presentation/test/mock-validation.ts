import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: string

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(filedName: string, fieldValue: string): string {
    return this.errorMessage
  }
}
