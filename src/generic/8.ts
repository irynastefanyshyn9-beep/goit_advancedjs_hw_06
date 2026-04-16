type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, 'errors'>;

const myParams: Params = {
  email: 'test@mail.com',
  firstName: 'Ivan',
  lastName: 'Ivanov',
  phone: '+380000000000'
};

console.log('--- Generic Task 8 ---');
console.log('Params object (without errors):', myParams);

export {};