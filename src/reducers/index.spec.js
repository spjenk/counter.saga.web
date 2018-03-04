import reducer from './index'

describe('reducers', () => {
  describe('reducer', () => {
    it('should provide the intial state', () => {
      expect(reducer(undefined, {})).toBe(0)
    })
    it('should handle INCREMENT', () => {
      expect(reducer(undefined, { type: 'INCREMENT' })).toBe(1)
    })
    it('should handle DECREMENT', () => {
      expect(reducer(2, { type: 'DECREMENT' })).toBe(1)
    })
  })
});