export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};

console.log('--- Generic Task 7 ---');
console.log('Admin description:', RoleDescription[UserRole.admin]);
console.log('All descriptions:', RoleDescription);

export {};