import React from 'react'
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface props {
  Pages: number,
  CurrentPage: number,
  OnPageChange: (e: React.ChangeEvent<unknown>) => void
}

function MUIPagination({ Pages, CurrentPage, OnPageChange }: props) {
  return (
    <>
      <div className='md:block hidden' >
        <Pagination
          count={Pages}
          size="medium"
          page={CurrentPage}
          onChange={OnPageChange}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
              sx={{
                "&.Mui-selected": {
                  bgcolor: "black",
                  color: "white",
                  display: {
                    md: "block",
                    xs: "none"
                  }
                },
              }}
            />
          )}
        />
      </div>
      <div className='md:hidden block' >
        <Pagination
          count={Pages}
          size="small"
          page={CurrentPage}
          onChange={OnPageChange}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
              sx={{
                "&.Mui-selected": {
                  bgcolor: "black",
                  color: "white",
                  display: {
                    md: "block",
                    xs: "none"
                  }
                },
              }}
            />
          )}
        />
      </div>
    </>
  )
}

export default MUIPagination