import React, { useContext, useEffect } from 'react';
import Select from 'react-select';

import { DataContext } from '../../context';
import { options } from '../../utils/const';

export const DropdownSelector = () => {
  const { queryValue, handleQuery } = useContext(DataContext);

  return (
    <div className="dropdown-selector">
      <Select
        placeholder="Select Option"
        defaultValue={options[queryValue - 1]}
        options={options}
        onChange={handleQuery}
        getOptionLabel={({ icon, text }) => (
          <div className="option">
            {icon}
            <span>{text}</span>
          </div>
        )}
      />
    </div>
  );
};
