import { useCallback, useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { DataContext } from "../../context";

export const BottomPagination = () => {
  const { handlerPagination, settings } = useContext(DataContext);
  const handleChange = useCallback((e) => {
    handlerPagination(e.target.textContent);
    window.scroll(0, 0);
  }, []);

  return (
    <Stack spacing={2}>
      <Pagination
        onChange={handleChange}
        className="pagination"
        count={settings.nbPages}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};
