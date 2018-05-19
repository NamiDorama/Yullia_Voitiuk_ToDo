import { request } from './rest';

jest.mock('../store', () => ({
  dispatch: () => 'test'
}));

describe('request', () => {
  const test = 'test';
  const fakeJSON = {
    json: () => Promise.resolve(test)
  };

  it('on successful fetch() should return data', async () => {
    global.fetch = () => Promise.resolve(fakeJSON);
    expect(await request('')).toBe(test);
  });

  it('on failed fetch() should throw an error', async () => {
    global.fetch = () => Promise.resolve({
      json: () => Promise.reject(test)
    });

    try {
      await request('')
    } catch (err) {
      expect(err).toBe(test);
    }
  });

  xit('on failed fetch() & url is "checkUser" should call dispatch()', async () => {
    global.fetch = () => Promise.resolve({
      json: () => Promise.reject(test)
    });

    try {
      await request('checkUser')
    } catch (err) {
      expect(dispatch).toHaveBeenCalled();
    }
  });
});