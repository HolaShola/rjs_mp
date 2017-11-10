import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '../../app/components/NotFound/NotFound';

describe('NotFound Snapshot', () => {
  it('Rendered NotFound Snapshot', () => {
    const tree = renderer.create(
      <NotFound />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
