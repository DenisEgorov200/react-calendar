const date = new Date();
const currentYear = date.getFullYear();

export const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export const years = Array.from({ length: 20 }, (_, index) => currentYear - 10 + index);
