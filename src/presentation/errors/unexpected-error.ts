export class UnexpectedError extends Error {
  constructor() {
    super('Something went wrong. Please try again in a few seconds');
    this.name = 'UnexpectedError';
  }
}
