import mut from './module.js'; // MUT = Module Under Test

test('sum adds two numbers', () => {
  expect(mut.sum(5, 10)).toBe(15);
});

test('div divides two numbers correctly', () => {
  expect(mut.div(10, 2)).toBe(5);
});

test('div handles decimal results', () => {
  expect(mut.div(7, 2)).toBeCloseTo(3.5);
});

test('containsNumbers returns true if text contains number', () => {
  expect(mut.containsNumbers('abc123')).toBe(true);
});

test('containsNumbers returns false if text has no number', () => {
  expect(mut.containsNumbers('hello')).toBe(false);
});

test('containsNumbers returns true if text starts with number', () => {
  expect(mut.containsNumbers('1test')).toBe(true);
});

