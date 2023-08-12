import React, { useState } from "react";
import Filter from "./Filter";
import SortBy from "./SortBy";

function FilterContainer() {
  const [openFilter, setOpenFilter] = useState(false);
  const [openSortBy, setOpenSortBy] = useState(false);

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  const handleOpenSort = (event) => {
    setOpenSortBy(event.currentTarget);
  };
  const handleCloseSort = () => {
    setOpenSortBy(null);
  };
  return (
    <div className="container mx-auto px-4 md:mx-0 md:px-16 ">
      <div className="grid grid-cols-2 gap-3 -mt-10 relative z-10 md:w-[40%] md:mt-10">
        <Filter
          openFilter={openFilter}
          handleFilterOpen={handleFilterOpen}
          handleFilterClose={handleFilterClose}
        />
        <SortBy
          openSortBy={openSortBy}
          handleOpenSort={handleOpenSort}
          handleCloseSort={handleCloseSort}
        />
      </div>
    </div>
  );
}

export default FilterContainer;
