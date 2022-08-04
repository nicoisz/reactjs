import { HitsList, TopButtons, TopHeader } from "./components";
import { DataProvider } from "./context";
import "./App.css";

export const App = () => {
  return (
    <DataProvider>
      <div className="Front-End-Test---Home-view">
        <div className="header">
          <TopHeader />
        </div>
        <div className="body">
          <TopButtons />
          <HitsList />
        </div>
      </div>
    </DataProvider>
  );
};
