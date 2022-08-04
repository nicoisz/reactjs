import React, { useContext } from "react";
import Select from "react-select";

import { DataContext } from "../../context";
import { options } from '../../utils/const';

export const DropdownSelector = () => {
  const { query, handleQuery } = useContext(DataContext);

  return (
    <div className="dropdown-selector">
      <Select 
        placeholder="Select Option"
        value={options.text}
        options={options}
        onChange={handleQuery}
        getOptionLabel={({icon, text}) => (
          <div className="option">
            {icon}
            <span>{text}</span>
          </div>
        )}
      />
    </div>
  );
};
