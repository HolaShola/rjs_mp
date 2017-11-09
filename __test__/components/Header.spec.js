import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../app/components/Header/Header';

describe('<Header />', () => {
  it('renders one <AppTitle /> components', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(AppTitle)).to.have.length(1);
  });

  it('renders one <Search /> components', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Search)).to.have.length(1);
  });
});
