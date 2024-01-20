export class InvalidFieldError extends Error {
  constructor(private readonly fieldLabel?: string) {
    super(fieldLabel ? `O campo ${fieldLabel} está inválido` : 'Campo inválido')
  }
}
