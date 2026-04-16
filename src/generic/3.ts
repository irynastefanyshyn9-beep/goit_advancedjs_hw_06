function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const merged = merge({ name: 'Alina' }, { age: 25 });

console.log('--- Generic Task 3 ---');
console.log('Merged object:', merged);
console.log('Name:', merged.name);
console.log('Age:', merged.age);

export {};