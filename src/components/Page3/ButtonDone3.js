import React from "react";
import "../Styling/ButtonDone.css";
import { Link } from "react-router-dom";

function ButtonDone3() {
  const done1 = () => {
    console.log("tovabbmentel");
  };

  return (
    <Link
      to="/fourth"
      style={{ textDecoration: "none" }}
      className="button-done"
      onClick={done1}
    >
      DONE
    </Link>
  );
}

export default ButtonDone3;
