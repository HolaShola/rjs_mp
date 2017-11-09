import * as types from '../../app/constants';
import ButtonReducer from '../../app/reducers/ButtonReducer';

describe('ButtonReducer', () => {
  it('should handle initial state', () => {
    expect(
      ButtonReducer(undefined, {}),
    ).toEqual('movie');
  });

  it('should handle action.payload', () => {
    expect(
      ButtonReducer(undefined, {
        type: types.CHANGE_TYPE_OF_SEARCH,
        payload: 'TV',
      }),
    ).toEqual('TV');
  });
})