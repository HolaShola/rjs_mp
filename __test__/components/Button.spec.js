import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../app/components/Button/Button';

let props;

describe('Button component Snapshot', () => {
  beforeEach(() => {
    props = {
      type: 'flat',
      text: 'Text_for_buttonя',
    };
  });
  
  it('Rendered Button Snapshot', () => {
    const rendered = renderer.create(
      <Button {...props} />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
