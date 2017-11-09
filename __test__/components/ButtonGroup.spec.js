import React from 'react';
import renderer from 'react-test-renderer';
import ButtonGroup from '../../app/components/ButtonGroup/ButtonGroup';

describe('ButtonGroup component Snapshot', () => {
  it('Rendered ButtonGroup Snapshot', () => {
    const ButtonGroupPropsObj = {
      label: 'Label_for_ButtonGroup', // 'raised'
    //  children: ['a', 'b', 'c'],
    };
    const rendered = renderer.create(
      <ButtonGroup {...ButtonGroupPropsObj} />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
