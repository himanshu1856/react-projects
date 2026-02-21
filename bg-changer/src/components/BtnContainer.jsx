import { useState } from "react";
import Button from "./Button";

function BtnContainer({setContainerBg}) {
  return (
    <div className="flex gap-4 items-center justify-center">
      <Button setContainerBg={setContainerBg} text="Primary" bgColor="blue" textColor="white" /> {/* Blue */}
      <Button setContainerBg={setContainerBg} text="Success" bgColor="green" textColor="white" /> {/* Green */}
      <Button setContainerBg={setContainerBg} text="Danger" bgColor="red" textColor="white" /> {/* Red */}
      <Button setContainerBg={setContainerBg} text="Warning" bgColor="yellow" textColor="white" />{" "}
      {/* Yellow */}
      <Button setContainerBg={setContainerBg} text="Dark" bgColor="gray" textColor="white" /> {/* Dark Gray */}
    </div>
  );
}

export default BtnContainer;
