import React from "react";
// import Ipad from "./components/Pages/Ipad/Ipad";
import Ipad from "../ipad/ipad";
import Iphone from "../Iphone/Iphone";
import Mac from "../Mac/Mac";
function AllPages() {
  return (
    <>
      <Ipad />
      <Iphone />
      <Mac />
    </>
  );
}

export default AllPages;
