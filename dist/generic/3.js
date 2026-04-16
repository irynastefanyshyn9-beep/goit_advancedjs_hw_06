function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merged = merge({ name: 'Alina' }, { age: 25 });
console.log('--- Generic Task 3 ---');
console.log('Merged object:', merged);
console.log('Name:', merged.name);
console.log('Age:', merged.age);
export {};
//# sourceMappingURL=3.js.map