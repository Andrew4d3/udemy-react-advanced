import React from "react";
// (4) Now we need to import our recently created component
import Header from "./Header";

export default () => (
  <div>
    {/* (5) And include it here */}
    <Header />
    Hi, I'm the app
  </div>
);

// (6) But we're getting an error: Invariant failed: You should not use <Link> outside a <Router>. Let's fix this next...