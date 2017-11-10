import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Button from '../../app/components/Button/Button';

let props;

describe('Button component Snapshot', () => {
  beforeEach(() => {
    props = {
      type: 'flat',
      text: 'Text_for_button',
    };
  });
  
  it('Rendered Button Snapshot', () => {
    const rendered = renderer.create(
      <Button {...props} />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('simulate click', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <Button {...props} onClick={onClick} />,
    );
    wrapper.find('button').simulate('click');
    //  console.log(wrapper.debug());
    expect(onClick.calledOnce).toBe(true);
  //  expect(wrapper.find('button').length).toBe(1);
  });
});
