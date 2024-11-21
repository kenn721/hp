"use client";

import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

export default function Page() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
