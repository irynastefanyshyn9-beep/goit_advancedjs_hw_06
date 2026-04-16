function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
const result = compare({ name: 'Header', color: 'Blue' }, { position: 1, weight: 100 });
console.log('--- Generic Task 2 ---');
console.log('Comparison Result:', result);
export {};
//# sourceMappingURL=2.js.map