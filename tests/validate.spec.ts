import { validatorPhone, validatorIdCard, validatorCarCard } from "../src/validate";
test('isphone', () => {
  expect(validatorPhone('18709098765')).toBeTruthy();
  expect(validatorPhone('')).toBeFalsy();
  expect(validatorIdCard('1870909876')).toBeFalsy();
  expect(validatorIdCard('362428199809097327')).toBeTruthy();
  expect(validatorCarCard('浙A6666')).toBeFalsy();
  expect(validatorCarCard('浙A58A77')).toBeTruthy();
})