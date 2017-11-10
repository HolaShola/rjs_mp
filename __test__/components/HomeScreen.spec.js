import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import HomeScreen from '../../app/components/HomeScreen';

describe('HomeScreen Snapshot', () => {
  it('Rendered HomeScreen Snapshot', () => {
    const wrapper = shallow(
      <HomeScreen />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
