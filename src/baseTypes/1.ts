let age: number = 50;
let userName: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;

let callback = (a: number): number => { 
  return 100 + a; 
};

console.log('--- Generic Task 1 ---');
console.log('age:', age);
console.log('userName:', userName);
console.log('toggle:', toggle);
console.log('empty:', empty);
console.log('notInitialize:', notInitialize);
console.log('callback(5):', callback(5)); 

export {};