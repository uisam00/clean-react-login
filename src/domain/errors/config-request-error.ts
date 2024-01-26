export class ConfigRequestError extends Error {
  constructor() {
    super('Erro na configuração da requisição')
    this.name = 'ConfigRequestError'
  }
}
