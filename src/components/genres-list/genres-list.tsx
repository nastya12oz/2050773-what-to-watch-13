import classNames from 'classnames';
import React from 'react';

type GenresListProps = {
  genres: string[];
  currentGenre: string;
  onGenreChange: (genre: string) => void;
}

function GenresList({genres, currentGenre, onGenreChange}: GenresListProps): JSX.Element {


  const handleGenreClick = (genre: string, event: React.MouseEvent) => {
    event.preventDefault(); // Prevents the default anchor tag behavior
    onGenreChange(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres && genres.map((genre) => (
        <li
          key={genre}
          className={classNames('catalog__genres-item', { 'catalog__genres-item--active': genre === currentGenre })}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(event) => handleGenreClick(genre, event)}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}


export default GenresList;
