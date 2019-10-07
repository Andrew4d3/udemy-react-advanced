import React from "react";
import Header from "./Header";

// (6) Now let's destructure our App component props so we can pass out its children
export default ({ children}) => (
  <div>
    <Header />
    {children}
  </div>
);