/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
};

function isWeekend(day: DayWeek): boolean {
  if (day === DayWeek.Saturday || day === DayWeek.Sunday) {
    return false;
  } else {
    return true;
  }
};

export {isWeekend};