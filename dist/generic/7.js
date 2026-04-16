export var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["editor"] = "editor";
    UserRole["guest"] = "guest";
})(UserRole || (UserRole = {}));
const RoleDescription = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
};
console.log('--- Generic Task 7 ---');
console.log('Admin description:', RoleDescription[UserRole.admin]);
console.log('All descriptions:', RoleDescription);
//# sourceMappingURL=7.js.map