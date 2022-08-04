import { useCallback, useContext } from "react";

import { BottomPagination } from '../bottomPagination';
import { UpperText } from '../upperText';
import { DropdownSelector } from '../dropdownSelector';
import { DataContext } from '../../context';
import { defineIfIsFavourite } from '../../utils/helpers';

export const HitsList = () => {
  const { posts, fav, handleFavourite } = useContext(DataContext);

  const handleFavs = useCallback((post) => () => {
    console.log(post)
    handleFavourite(post)
  }, [])
  
  return (
    <div>
      <div className="first-container">
        <DropdownSelector />
      </div>
      <div className="second-container">
        {posts.map((post) => (
          <div className="rectangle" key={post.objectID}>
            <div>
              <UpperText />
              <div className="event-driven-state-m">
                <h4>{post.story_title}</h4>
              </div>
            </div>
            <div className="small-rectangle">
              <button onClick={handleFavs(post)}>
                <img src={defineIfIsFavourite(post.objectID)} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <footer className="footer">
        <BottomPagination  />
      </footer>
    </div>
  );
};
