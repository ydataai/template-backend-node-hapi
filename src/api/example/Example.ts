export interface IExample {
  something: string
}

export class Example implements IExample {
  something: string

  constructor(something: string) {
    this.something = something
  }
}
