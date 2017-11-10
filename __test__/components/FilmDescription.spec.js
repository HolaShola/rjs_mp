import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import FilmDescription from '../../app/components/FilmDescription';

const currentFilm = {
  release_date: '2015-05-13',
  poster_path: '/kqjL17yufvn9OVLyXYpvtyrFfak.jpg',
  original_title: 'Mad Max: Fury Road',
  id: 76341,
  vote_average: 7.3,
};

describe('FilmDescription Snapshot', () => {
  it('Rendered FilmDescription Snapshot', () => {
    const wrapper = shallow(
      <FilmDescription currentFilm={currentFilm} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
