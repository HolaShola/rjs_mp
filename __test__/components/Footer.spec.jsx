import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'
import Footer from '../../app/components/Footer/Footer';

describe('Footer Snapshot', () => {
  it('Rendered Footer Snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>  
        <Footer />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
