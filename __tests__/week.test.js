const { weekFn } = require ("../main");

describe('weekFn', () => {
  test ('повинно повертати "Понеділок" для значення 1', () => {
    expect(weekFn(1)).toBe('Понеділок');
  });

  test ('повинно повертати "Середа" для значення 3', () => {
    expect(weekFn(3)).toBe('Середа');
  });

  test ('повинно повертати "Неділя" для значення 1', () => {
    expect(weekFn(7)).toBe('Неділя');
  });

  test ('повертає null для значення 9', () => {
    expect(weekFn(9)).toBe(null);
  });

  test ('повертає null для значення 1.5', () => {
    expect(weekFn(1.5)).toBe(null);
  });

  test ('повинно повертати "Понеділок" для значення "2"', () => {
    expect(weekFn('2')).toBe(null);
  });

})

