import { useCallback, useContext } from "react";
import { DataContext } from "../../context";

export const TopButtons = () => {
  const { handleFavPage } = useContext(DataContext);
  const handlePage = useCallback(
    (value) => () => {
      handleFavPage(value);
    },
    []
  );

  return (
    <div className="in-line-buttons">
      <button className="top-buttons" onClick={handlePage(false)}>
        <span className="All">All</span>
      </button>
      <button className="top-buttons" onClick={handlePage(true)}>
        <span className="My-faves Text-Style-3">My faves</span>
      </button>
    </div>
  );
};
