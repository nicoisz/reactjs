import { HitsList, TopButtons, TopHeader } from './components';
import './App.css';
import { useCallback, useContext } from 'react';
import { DataContext } from './context';

export const App = () => {
  const { query, fav, posts, showFavPages, handleFavourite } =
    useContext(DataContext);
  return (
    <div className="Front-End-Test---Home-view">
      <div className="header">
        <TopHeader />
      </div>
      <div className="body">
        <TopButtons />
        {showFavPages ? (
          <HitsList
            showFavPages={showFavPages}
            data={fav}
            handleFavourite={handleFavourite}
            query={query}
          />
        ) : (
          <HitsList
            showFavPages={showFavPages}
            data={posts}
            handleFavourite={handleFavourite}
            query={query}
          />
        )}
      </div>
    </div>
  );
};
