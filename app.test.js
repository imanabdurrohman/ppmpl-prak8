const request = require('supertest'); 
const app = require('./app'); 
describe('GET /', () => { 
  it('responds with Hello, World!', async () => { 
    const res = await request(app).get('/'); 
    expect(res.statusCode).toBe(200); 
    expect(res.text).toBe('Hello, World!'); 
}); 
});

describe('Simple Unit Tests for Utility Functions', () => {
  const { processData, validateInput } = require('./utils');

  test('processData should return data with an ID', () => {
      const input = { name: 'John', age: 25 };
      const result = processData(input, '123');
      expect(result).toEqual({ id: '123', name: 'John', age: 25 });
  });

  test('validateInput should return true for valid input', () => {
      const validData = { name: 'John', age: 25 };
      expect(validateInput(validData)).toBe(true);
  });

  test('validateInput should return false for invalid input', () => {
      const invalidData = { name: '' };
      expect(validateInput(invalidData)).toBe(false);
  });
});
