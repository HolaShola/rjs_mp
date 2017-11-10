import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Button from '../../app/components/Button';
import ButtonGroup from '../../app/components/ButtonGroup';

const props = {
  type: 'raised',
  text: 'movie',
};

describe('ButtonGroup component Snapshot', () => {
  it('Rendered ButtonGroup Snapshot', () => {
    const ButtonGroupPropsObj = {
      label: 'Label_for_ButtonGroup', // 'raised'
      children: [<Button {...props} />],
    };
    const rendered = renderer.create(
      <ButtonGroup {...ButtonGroupPropsObj} />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <ButtonGroup label="search by">
        <Button {...props} />
        <Button {...props} />
      </ButtonGroup>
    );
    expect(wrapper.contains(<Button {...props} />));
  });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = mount((
  //     <ButtonGroup label="search by" onButtonClick={onButtonClick}>
  //       <Button {...props} />
  //       <Button {...props} />
  //       <button>me</button>
  //     </ButtonGroup>
  //   ));
  //   expect(wrapper.find(Button)).to.have.length(2);
  // //  wrapper.find(<button>me</button>).simulate('click');
  // //  expect(onButtonClick.calledOnce).to.equal(true);
  // });  

});
