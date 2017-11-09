import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'
import AppTitle from '../../app/components/AppTitle';

describe('AppTitle Snapshot', () => {
  it('Rendered AppTitle Snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>  
        <AppTitle />
      </MemoryRouter>  
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
