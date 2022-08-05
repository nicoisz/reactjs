import { HitsList, TopButtons, TopHeader } from "./components";
import "./App.css";
import { useCallback, useContext } from "react";
import { DataContext } from './context';

export const App = () => {
  const { fav, posts, showFavPages, handleFavourite } = useContext(DataContext);
  console.log("asdasd", fav, posts)
  return (
    <div className="Front-End-Test---Home-view">
      <div className="header">
        <TopHeader />
      </div>
      <div className="body">
        <TopButtons />
        {showFavPages ?
          <HitsList showFavPages={showFavPages} data={fav} handleFavourite={handleFavourite} /> :
          <HitsList showFavPages={showFavPages} data={posts} handleFavourite={handleFavourite} />
        }

      </div>
    </div>
  );
};
