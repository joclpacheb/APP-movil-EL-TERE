import React, { useState } from "react";
import Toast from "react-native-root-toast";

export const useToast = () => {
  const [isShow, setIsShow] = useState(false);
  const [toasData, setToasData] = useState({
    color: "success",
    text: "",
  });

  const showSuccesToast = (message) => {
    Toast.show(message, {
      backgroundColor: "green",
      position: Toast.positions.TOP,
    });
  };

  const showErrorToast = (message) => {
    Toast.show(message, {
      backgroundColor: "red",
      position: Toast.positions.TOP,
    });
  };

  return {
    showSuccesToast,
    showErrorToast,
  };
};
