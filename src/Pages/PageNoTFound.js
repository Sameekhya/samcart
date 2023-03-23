import React from "react";

import { useEffect } from "react";

const PageNoTFound = () => {
  useEffect(() => {
    document.title = `PageNotFound /Cinemate`;
  });

  return <div>404 PAGE NOT FOUND</div>;
};

export default PageNoTFound;
