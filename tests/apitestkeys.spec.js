const opencage = require('..');

describe('API keys for testing', () => {
  // jasmine.DEFAULT_TIMEOUT_INTERVAL = 150000; // 15 seconds timeout
  jest.setTimeout(15000);

  const query = {
    q: '51.952659,7.632473',
    pretty: 1,
    no_annotations: 1,
  };

  describe('Sunny test', () => {
    test('generate a 200 - OK response', () => {
      expect.assertions(4);
      const input = {
        ...query,
        key: '6d0e711d72d74daeb2b0bfd2a5cdfdba',
      };
      return opencage
        .geocode(input)
        .then((data) => {
          expect(data).toBeTruthy();
          expect(data.status).toBeTruthy();
          expect(data.status.code).toBeTruthy();
          expect(data.status.code).toEqual(200);
        })
        .catch(() => {
          // no used, in case it raises a test error
          expect(false).toBeTruthy();
        });
    });
  });
  describe('rainy tests', () => {
    test('generate a 402 - quota exceeded response', () => {
      expect.assertions(4);
      const input = {
        ...query,
        key: '4372eff77b8343cebfc843eb4da4ddc4',
      };
      return opencage
        .geocode(input)
        .then(() => {
          // no used, in case it raises a test error
          expect(false).toBeTruthy();
        })
        .catch((data) => {
          // console.log(data);
          expect(data).toBeTruthy();
          expect(data.status).toBeTruthy();
          expect(data.status.code).toBeTruthy();
          expect(data.status.code).toEqual(402);
        });
    });
    test('generate a 403 - suspended response', () => {
      expect.assertions(4);
      const input = {
        ...query,
        key: '2e10e5e828262eb243ec0b54681d699a',
      };
      return opencage
        .geocode(input)
        .then(() => {
          // no used, in case it raises a test error
          expect(false).toBeTruthy();
        })
        .catch((data) => {
          // console.log(data);
          expect(data).toBeTruthy();
          expect(data.status).toBeTruthy();
          expect(data.status.code).toBeTruthy();
          expect(data.status.code).toEqual(403);
        });
    });
    test('generate a 429 - requesting too quickly response', () => {
      expect.assertions(4);
      const input = {
        ...query,
        key: 'd6d0f0065f4348a4bdfe4587ba02714b',
      };
      return opencage
        .geocode(input)
        .then(() => {
          // no used, in case it raises a test error
          expect(false).toBeTruthy();
        })
        .catch((data) => {
          // console.log(data);
          expect(data).toBeTruthy();
          expect(data.status).toBeTruthy();
          expect(data.status.code).toBeTruthy();
          expect(data.status.code).toEqual(429);
        });
    });
  });
});
