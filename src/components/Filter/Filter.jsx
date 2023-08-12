import React from "react";
import { MdArrowDropDownCircle } from "react-icons/md";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Checkbox, FormControlLabel } from "@mui/material";

function Filter({ openFilter, handleFilterOpen, handleFilterClose }) {
  return (
    <div>
      <div className="p-4 bg-[#f5f5f5] border-[#dedede] rounded-lg">
        <div
          onClick={() => {
            handleFilterOpen();
          }}
          className="flex items-center  justify-between cursor-pointer border py-1 px-3 rounded-lg bg-white"
        >
          <p className="font-medium text-[16px] text-[#3d3d3d] capitalize">
            Fliter
          </p>
          <MdArrowDropDownCircle className="text-2xl" />
        </div>
      </div>
      <Dialog
        open={openFilter}
        onClose={handleFilterClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"filter to find your Tour"}
        </DialogTitle>
        <div className="flex flex-col gap-4 px-5">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Romantic Tours"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label=" Luxury Egypt Tours"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Tours"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Christmas Offers"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="New Year Offers"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Easter Offers"
          />
        </div>
        <DialogActions>
          <Button onClick={handleFilterClose} autoFocus>
            filter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Filter;
