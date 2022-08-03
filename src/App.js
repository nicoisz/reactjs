import "./App.css";
import { HitsList } from "./components/hitsList/hitsList";
import { TopHeader } from "./components/topHeader/topHeader";

export const App = () => {
  return (
    <div className="Front-End-Test---Home-view">
      <TopHeader></TopHeader>
      <HitsList></HitsList>
    </div>
  );
};
