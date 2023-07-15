import { useState, useEffect } from "react";
import { Spinner } from "@material-tailwind/react";

export default function Loading() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const loadingContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // Đảm bảo phần tử chứa Loading có chiều cao tối thiểu là chiều cao của trang web
  };

  return showSpinner ? (
    <div style={loadingContainerStyle}>
      <Spinner className="h-12 w-12" />
    </div>
  ) : null;
}
