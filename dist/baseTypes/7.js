export const DayOfWeek = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6
};
function isWeekend(day) {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}
console.log(isWeekend(DayOfWeek.Monday));
console.log(isWeekend(DayOfWeek.Saturday));
console.log('--- Generic Task 7 ---');
console.log('Is Monday a weekend?', isWeekend(DayOfWeek.Monday));
console.log('Is Saturday a weekend?', isWeekend(DayOfWeek.Saturday));
//# sourceMappingURL=7.js.map