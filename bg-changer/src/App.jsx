import BtnContainer from "./components/BtnContainer";
import { useState } from "react";

function App() {
  const [containerBg, setContainerBg] = useState("bg-gray-800");
  const bgVariants = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  red: "bg-red-600 ",
  yellow: "bg-yellow-600",
  gray: "bg-gray-800",
};
  let classes = `w-screen h-screen ${containerBg} flex justify-center`;

  const changeBgColor = function(color){
    setContainerBg(bgVariants[color])
  }

  return (
    <div className={classes}>
      <BtnContainer setContainerBg={changeBgColor} />
    </div>
  );
}

export default App;
