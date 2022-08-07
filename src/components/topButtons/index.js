import { useCallback, useContext } from 'react';
import { DataContext } from '../../context';

export const TopButtons = () => {
  const { showFavPages, handleFavPage } = useContext(DataContext);

  const handlePage = useCallback(
    (value) => () => {
      handleFavPage(value);
    },
    []
  );

  return (
    <div className="in-line-buttons">
      <button className="top-buttons" onClick={handlePage(false)}>
        <span className={showFavPages ? 'inactive' : 'active'}>All</span>
      </button>
      <button className="top-buttons" onClick={handlePage(true)}>
        <span className={!showFavPages ? 'inactive' : 'active'}>My faves</span>
      </button>
    </div>
  );
};
