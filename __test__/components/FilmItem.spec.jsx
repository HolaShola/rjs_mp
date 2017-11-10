import React from 'react';
import renderer from 'react-test-renderer';
import FilmItem from '../../app/components/FilmItem/FilmItem';

describe('FilmItem Snapshot', () => {
  it('Rendered FilmItem Snapshot', () => {
    const propsObj = {
      posterUrl: 'https://stackoverflow.com/questions111',
      show_title: 'FilmItem titlezzz',
      rating: 7.9,
      onClick: () => {},
    };
    const rendered = renderer.create(
      <FilmItem {...propsObj} />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
