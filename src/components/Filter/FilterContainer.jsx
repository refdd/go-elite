import React, { useState } from "react";
import Filter from "./Filter";
import SortBy from "./SortBy";

function FilterContainer() {
  const [openFilter, setOpenFilter] = useState(false);
  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  return (
    <div className="container mx-auto px-4 ">
      <div className="grid grid-cols-2 gap-3 -mt-10 relative z-10">
        <Filter
          openFilter={openFilter}
          handleFilterOpen={handleFilterOpen}
          handleFilterClose={handleFilterClose}
        />
        <SortBy />
      </div>
    </div>
  );
}

export default FilterContainer;
