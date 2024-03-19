/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pagination, ThemeProvider, createTheme } from '@mui/material';

interface PaginationProps {
  setPage: (page: number) => void;
  totalPages: number | undefined;
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function CustomPagination({ setPage, totalPages = 10 }: PaginationProps) {
  const handlePageChange = (page: number) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className='flex items-center justify-center mt-3 w-full'>
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e: any) => handlePageChange(e.target.textContent)}
          count={totalPages}
          color='primary'
          variant='outlined'
          size='large'
        />
      </ThemeProvider>
    </div>
  );
}

export default CustomPagination;
