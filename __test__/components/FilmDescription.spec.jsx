import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import FilmDescription from '../../app/components/FilmDescription';
import { mockPoster, constantPartOfURL } from '../../config';

const currentFilm = {
  release_date: '2015-05-13',
  poster_path: '/kqjL17yufvn9OVLyXYpvtyrFfak.jpg',
  original_title: 'Mad Max: Fury Road',
  id: 76341,
  vote_average: 7.3,
};

const currentFilmWithoutPosterPath = {
  release_date: '2015-05-13',
  original_title: 'Mad Max: Fury Road',
  id: 76341,
  vote_average: 7.3,
};

describe('FilmDescription Snapshot', () => {
  it('Rendered FilmDescription Snapshot', () => {
    const wrapper = shallow(
      <FilmDescription currentFilm={currentFilm} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('testing ternary operator with poster_path', () => {
    const wrapper = shallow(
      <FilmDescription currentFilm={currentFilm} />,
    );
    expect(wrapper.find('img').prop('src')).toEqual(constantPartOfURL + currentFilm.poster_path);
  });

  it('testing ternary operator without poster_path', () => {
    const wrapper = shallow(
      <FilmDescription currentFilm={currentFilmWithoutPosterPath} />,
    );
    expect(wrapper.find('img').prop('src')).toEqual(mockPoster);
  });
});
