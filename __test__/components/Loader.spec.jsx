import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../../app/components/Loader';

describe('Loader Snapshot', () => {
  it('Rendered Loader Snapshot', () => {
    const tree = renderer.create(
      <Loader />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
