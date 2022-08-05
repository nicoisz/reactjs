import { useCallback, useContext } from "react";

import { BottomPagination } from "../bottomPagination";
import { UpperText } from "../upperText";
import { DropdownSelector } from "../dropdownSelector";
import { DataContext } from "../../context";
import { defineIfIsFavourite } from "../../utils/helpers";

export const HitsList = ({ showFavPages, data, handleFavourite }) => {
  //const { posts, handleFavourite } = useContext(DataContext);

  const handleFavs = useCallback(
    (post) => () => {
      handleFavourite(post);
    },
    []
  );

  return (
    <div>
      {!showFavPages && (
        <div className="first-container">
          <DropdownSelector />
        </div>
      )}
      <div className="second-container">
        {data.map((value) => (
          <div className="rectangle" key={value.objectID}>
            <div>
              <UpperText />
              <div className="event-driven-state-m">
                <h4>{value.story_title}</h4>
              </div>
            </div>
            <div className="small-rectangle">
              <button onClick={handleFavs(value)}>
                <img src={defineIfIsFavourite(value.objectID)} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {!showFavPages && (
        <footer className="footer">
          <BottomPagination />
        </footer>
      )}
    </div>
  );
};
