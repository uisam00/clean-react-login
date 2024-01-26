export class NoResponseFromServer extends Error {
  constructor() {
    super('Sem resposta do servidor.')
    this.name = 'NoResponseFromServer'
  }
}
