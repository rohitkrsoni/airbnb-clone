"use client";

// we should create a provider when using external library
// so that It is coming from atleast one client parent ("use client")

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;
