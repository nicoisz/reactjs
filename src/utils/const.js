import AngularIcon from "../images/icons/image-138.png";
import VueIcon from "../images/icons/image-140.png";
import ReactJsIcon from "../images/icons/image-141.png";

export const URL = `https://hn.algolia.com/api/v1/search_by_date`;

export const options = [
    {
      value: 1,
      text: "Angular",
      icon: <img src={AngularIcon} alt="Angular" />,
    },
    {
      value: 2,
      text: "Reactjs",
      icon: <img src={ReactJsIcon} alt="Reactjs" />,
    },
    {
      value: 3,
      text: "Vuejs",
      icon: <img src={VueIcon} alt="Vuejs" />,
    },
];