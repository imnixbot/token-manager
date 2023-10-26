import { verifyAndDecodeToken } from '../src';

test('Expect verifyAndDecodeToken takes token and sectret and return decoded token', () => {
  const result = verifyAndDecodeToken('password', 'password');
  expect(result).toBe(null);
});