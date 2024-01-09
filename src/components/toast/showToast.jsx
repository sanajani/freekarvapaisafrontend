import { toast } from "react-toastify";

export function showToast(message, type = "success") {
    const toastOptions = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      className: 'md:text-xl text-base sm:text-lg font-bold' // Add a custom class
    };
  
    switch (type) {
      case "success":
        toast.success(message, toastOptions);
        break;
      case "error":
        toast.error(message, toastOptions);
        break;
      case "info":
        toast.info(message, toastOptions);
        break;
      // Add more cases for other types if needed
      default:
        toast(message, toastOptions);
        break;
    }
  }
  
  // Example usage