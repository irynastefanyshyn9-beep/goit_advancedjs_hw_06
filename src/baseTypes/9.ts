type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close'; 
  details?: { 
    createAt: Date;
    updateAt: Date;
  }
}

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

console.log('--- Generic Task 9 ---');
console.log(`Page 1 status: ${page1.status}`);
console.log(`Page 2 status: ${page2.status} (no details: ${!page2.details})`);

export {};