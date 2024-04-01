import React from "react";
import { Modal, Box } from "@mui/material";
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  Component: any;
  setRoute?: (route: string) => void;
}
const CustomModal: React.FC<Props> = ({
  open,
  setOpen,
  activeItem,
  Component,
  setRoute,
}) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-description"
    >
      <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadoe p-4 ouline-none">
        <Component setOpen={setOpen} setRoute={setRoute} />
      </Box>
    </Modal>
  );
};

export default CustomModal;
