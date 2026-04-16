let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
    str = some;
    console.log('--- Generic Task 3 ---');
    console.log('Змінна str отримала значення:', str);
}

export {};