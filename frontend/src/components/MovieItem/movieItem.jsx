import PropTypes from 'prop-types';
import { Button, Rating } from 'flowbite-react';

const MovieItem = ({imageUrl, title, year, rating, plot, wikipediaUrl}) => {
    return (
      <div className="flex flex-col w-full h-full rounded-lg shadow-md lg:max-w-sm">
        <div className="grow">
          <img
            className="object-cover w-full h-60 md:h-80"
            src={imageUrl}
            alt={title}
            loading="lazy"
          />
        </div>
  
        <div className="grow flex flex-col h-full p-3">
          <div className="grow mb-3 last:mb-0">
            {year || rating
              ? <div className="flex justify-between align-middle text-gray-900 text-xs font-medium mb-2">
                  <span>{year}</span>
  
                  {rating
                    ? <Rating>
                        <Rating.Star />
  
                        <span className="ml-0.5">
                          {rating}
                        </span>
                      </Rating>
                    : null
                  }
                </div>
              : null
            }
  
            <h3 className="text-gray-900 text-lg leading-tight font-semibold mb-1">
              {title}
            </h3>
  
            <p className="text-gray-600 text-sm leading-normal mb-4 last:mb-0">
              {plot.substr(0, 80)}...
            </p>
          </div>
  
          {wikipediaUrl
            ? <Button
                color="light"
                size="xs"
                className="w-full"
                onClick={() => window.open(wikipediaUrl, '_blank')}
              >
                More
              </Button>
            : null
          }
        </div>
      </div>
    );
  };

  MovieItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    plot: PropTypes.string.isRequired,
    wikipediaUrl: PropTypes.string.isRequired,
  };

export default MovieItem;