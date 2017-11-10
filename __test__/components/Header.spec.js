import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../app/components/Header';

describe('Header Snapshot', () => {
  it('Rendered Header components', () => {
    const wrapper = shallow(
      <Header />  
    );
    expect(wrapper).toMatchSnapshot();
  });
});
