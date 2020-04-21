import { IExample, Example } from "./Example"

export default class ExampleController {

  constructor() { }

  public async test() {

    let example: IExample = new Example("Hello from example")
    return example
  }
}
