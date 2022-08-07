import { useCallback, useContext } from 'react';

import { BottomPagination } from '../bottomPagination';
import { UpperText } from '../upperText';
import { DropdownSelector } from '../dropdownSelector';
import { DataContext } from '../../context';
import { defineIfIsFavourite } from '../../utils/helpers';

export const HitsList = ({ query, showFavPages, data, handleFavourite }) => {
  const handleFavs = useCallback(
    (post) => () => {
      handleFavourite(post, query);
    },
    [query]
  );

  const handleURL = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      {!showFavPages && (
        <div className="first-container">
          <DropdownSelector />
        </div>
      )}
      <div className="second-container">
        {!showFavPages
          ? data.map((value) => (
              <div className="rectangle" key={value.objectID}>
                <div
                  className="big-rectangle"
                  onClick={() => handleURL(value.story_url)}
                >
                  <UpperText />
                  <div className="event-driven-state-m">
                    <h4>{value.story_title}</h4>
                  </div>
                </div>
                <div className="small-rectangle" onClick={handleFavs(value)}>
                  <img
                    className="heart"
                    src={defineIfIsFavourite(value.objectID)}
                  />
                </div>
              </div>
            ))
          : data.map(
              (value) =>
                value._tags[3] == query && (
                  <div className="rectangle" key={value.objectID}>
                    <div className="big-rectangle">
                      <UpperText />
                      <div className="event-driven-state-m">
                        <h4>{value.story_title}</h4>
                      </div>
                    </div>
                    <div
                      className="small-rectangle"
                      onClick={handleFavs(value)}
                    >
                      <img
                        className="heart"
                        src={defineIfIsFavourite(value.objectID)}
                      />
                    </div>
                  </div>
                )
            )}
      </div>
      {!showFavPages && (
        <footer className="footer">
          <BottomPagination />
        </footer>
      )}
    </div>
  );
};
