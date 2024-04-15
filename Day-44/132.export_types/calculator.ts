export default class Calculator {
  private result: number;

  constructor() {
    this.result = 0;
  }

  add(a: number, b: number): number {
    this.result = a + b;
    return this.result;
  }

  subtract(a: number, b: number): number {
    this.result = a - b;
    return this.result;
  }

  multiply(a: number, b: number): number {
    this.result = a * b;
    return this.result;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    this.result = a / b;
    return this.result;
  }

  getResult(): number {
    return this.result;
  }

  clear(): void {
    this.result = 0;
  }
}
