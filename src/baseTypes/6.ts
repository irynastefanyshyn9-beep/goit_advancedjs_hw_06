function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

console.log('--- Generic Task 6 ---');
showMessage('Hello from TS function!');
console.log('Calculation result:', calc(5, 15));

export {};