// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('Valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('Valid phone number: 987-654-3210', () => {
  expect(isPhoneNumber('987-654-3210')).toBe(true);
});

test('Invalid phone number: missing dashes', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('Invalid phone number: too short', () => {
  expect(isPhoneNumber('123-45-678')).toBe(false);
});

// --- isEmail ---
test('Valid email: test@example.com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('Valid email: user.name@mail.co', () => {
  expect(isEmail('user.name@mail.co')).toBe(true);
});

test('Invalid email: missing "@"', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

test('Invalid email: missing domain', () => {
  expect(isEmail('test@')).toBe(false);
});

// --- isStrongPassword ---
test('Valid strong password: abc123', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});

test('Valid strong password: password1', () => {
  expect(isStrongPassword('password1')).toBe(true);
});

test('Invalid strong password: starts with number', () => {
  expect(isStrongPassword('1password')).toBe(false);
});

test('Invalid strong password: too short', () => {
  expect(isStrongPassword('a1')).toBe(false);
});

// --- isDate ---
test('Valid date: 12/25/2023', () => {
  expect(isDate('12/25/2023')).toBe(true);
});

test('Valid date: 01/01/2000', () => {
  expect(isDate('01/01/2000')).toBe(true);
});

test('Invalid date: wrong format', () => {
  expect(isDate('2023-12-25')).toBe(false);
});

test('Invalid date: out-of-range month', () => {
  expect(isDate('13/01/2020')).toBe(false);
});

// --- isHexColor ---
test('Valid hex color: #abc', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('Valid hex color: #a1b2c3', () => {
  expect(isHexColor('#a1b2c3')).toBe(true);
});

test('Invalid hex color: missing #', () => {
  expect(isHexColor('abc123')).toBe(false);
});

test('Invalid hex color: too long', () => {
  expect(isHexColor('#1234567')).toBe(false);
});