const { ageClassification } = require("../main");


describe('ageClassification', () => {
  test('повинно повертати null для негативних значень', () => {
    expect(ageClassification(-1)).toBe(null);
  });

  test('повинно повертати "Дитинство" для віку від 0 до 24', () => {
    expect(ageClassification(0)).toBe('Дитинство');
    expect(ageClassification(1)).toBe('Дитинство');
    expect(ageClassification(24)).toBe('Дитинство');
  });

  test('повинно повертати "Молодість" для віку від 24.01 до 44', () => {

    expect(ageClassification(24.01)).toBe('Молодість');
    expect(ageClassification(44)).toBe('Молодість');
  });

  test('повинно повертати "Зрілість" для віку від 44.01 до 65', () => {
    expect(ageClassification(44.01)).toBe('Зрілість');
    expect(ageClassification(65)).toBe('Зрілість');
  });

  test('повинно повертати "Старість" для віку від 65.1 до 75', () => {
    expect(ageClassification(65.1)).toBe('Старість');
    expect(ageClassification(66)).toBe('Старість');
    expect(ageClassification(75)).toBe('Старість');
  });

  test('повинно повертати "Довголіття" для віку від 75.01 до 90', () => {
    expect(ageClassification(75.01)).toBe('Довголіття');
    expect(ageClassification(76)).toBe('Довголіття');
    expect(ageClassification(90)).toBe('Довголіття');
  });

  test('повинно повертати "Рекорд" для віку від 90.01 до 122', () => {
    expect(ageClassification(90.01)).toBe('Рекорд');
    expect(ageClassification(122)).toBe('Рекорд');
  });

  test('повинно повертати null для віку більшого за 122', () => {
    expect(ageClassification(122.01)).toBe(null);
    expect(ageClassification(150)).toBe(null);
  });
});