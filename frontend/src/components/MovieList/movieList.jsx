import PropTypes from 'prop-types';

import MovieItem from '../MovieItem/movieItem';

const MovieList = ({ movies }) => {

  return (
    <div className="grid gap-4 md:gap-y-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3">
       {movies.map((item, key) => (
            <MovieItem key={key} {...item} />
          ))}
    </div>
  );
};

// MovieList.propTypes = {
//   movies: PropTypes.node.isRequired,
// };
MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            imageUrl: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            year: PropTypes.number,
            rating: PropTypes.number,
            plot: PropTypes.string.isRequired,
            wikipediaUrl: PropTypes.string,
        })
    ).isRequired,
};

export default MovieList;
