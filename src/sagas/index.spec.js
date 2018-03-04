import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { incrementAsync } from './index'

const gen = incrementAsync();

describe('sagas', () => {
  describe('saga', () => {

    it('should incrementAsync', () => {
      expect(gen.next().value).toEqual(call(delay, 1000));
      expect(gen.next().value).toEqual(put({type: 'INCREMENT'}));
      expect(gen.next()).toEqual({ done: true, value: undefined });
    })
  })
  }
);