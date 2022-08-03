import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const BottomPagination = ({setPage, pageNumber}) => {
  const handleChange = (page)=>{
    setPage(page)
    window.scroll(0,0)
  }

  return (
    <Stack spacing={2}>
      <Pagination onChange={(e)=>{ handleChange(e.target.textContent)}} style={{display: "flex", justifyContent: "center"}} count={pageNumber} variant="outlined" shape="rounded" />
    </Stack>
  );
}
export default BottomPagination