type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  console.log('--- Generic Task 6 ---');
  console.log('Отримані дані для оновлення:', initialValues);
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});

export {};