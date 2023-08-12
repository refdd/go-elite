import React from "react";
import { MdArrowDropDownCircle } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
function SortBy({ openSortBy, handleOpenSort, handleCloseSort }) {
  const open = Boolean(openSortBy);

  return (
    <div>
      <div className="p-4 bg-[#f5f5f5] border-[#dedede] rounded-lg">
        <div
          id="basic-button"
          aria-haspopup="true"
          className="flex items-center  justify-between cursor-pointer border py-1 px-3 rounded-lg bg-white"
        >
          <p className="font-medium text-[16px] text-[#3d3d3d] capitalize">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleOpenSort}
              sx={{ color: "inherit", padding: 0 }}
            >
              sort by
            </Button>
          </p>
          <MdArrowDropDownCircle className="text-2xl" />
          <div className=""></div>
        </div>
        <div className="">
          <Menu
            id="basic-menu"
            anchorEl={openSortBy}
            open={open}
            onClose={handleCloseSort}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleCloseSort}>Duration</MenuItem>
            <MenuItem onClick={handleCloseSort}>Travelers</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default SortBy;
