import moxios from 'moxios';

import { getSecretWord } from '../hooks';

describe('mpxios tests', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('calls the getSecretWord callback on axios response', async () => {
    const secretWord = 'party';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });
    //create mock for callback arg
    const mockSetSecretWord = jest.fn();
    await getSecretWord(mockSetSecretWord);
    // check whether mock was run with the correct argument

    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);

  });
});