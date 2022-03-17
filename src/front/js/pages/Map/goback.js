import React from "react";
import { Link } from "react-router-dom";

function Goback() {
  return (
    <div className="gobackmap mb-5">
      <Link to="/">
        <h2>Goback</h2>
      </Link>
    </div>
  );
}

export default Goback;
