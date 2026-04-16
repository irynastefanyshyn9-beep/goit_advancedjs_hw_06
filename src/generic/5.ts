interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const entry1: KeyValuePair<number, string> = {
  key: 1,
  value: 'Active'
};

const entry2: KeyValuePair<string, boolean> = {
  key: 'isPremium',
  value: true
};

console.log('--- Generic Task 5 ---');
console.log('Entry 1:', entry1);
console.log('Entry 2:', entry2);

export {};