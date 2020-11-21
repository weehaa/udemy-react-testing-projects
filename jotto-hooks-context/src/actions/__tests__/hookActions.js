import moxios from 'moxios';

import { getSecretWord } from '../hookActions';

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
        response: {
            word: secretWord
        },
      });
    });
    //create mock for callback arg
    const mockSetSecretWord = jest.fn();
    await getSecretWord(
      mockSetSecretWord,
      'en',
      'adult',
      { isCanceled:false, cancel: jest.fn() }
      );
    // check whether mock was run with the correct argument
    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
  });
});