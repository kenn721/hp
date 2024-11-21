"use client";

import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner, etc.
  }

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
