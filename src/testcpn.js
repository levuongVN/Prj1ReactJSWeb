import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

// Hàm chuyển đổi hiệu ứng
function SlideTransition(props) {
  return <Slide {...props} direction="right" />;
}

export default function AlertWithTransition() {
  const [open, setOpen] = useState(false);

  // Hàm mở alert
  const handleClick = () => {
    setOpen(true);
  };

  // Hàm đóng alert
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return; // Bỏ qua nếu click ra ngoài
    }
    setOpen(false);
  };

  return (
    <div>
      {/* Nút để hiển thị alert */}
      <button onClick={handleClick}>Show Alert</button>

      {/* Snackbar chứa Alert */}
      <Snackbar
        open={open}
        autoHideDuration={3000} // Thời gian hiển thị alert (ms)
        onClose={handleClose}
        TransitionComponent={SlideTransition} // Hiệu ứng chuyển đổi
        anchorOrigin={{ vertical: "top", horizontal: "left" }} // Vị trí
      >
        <Alert onClose={handleClose} severity="success" variant="filled">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}
