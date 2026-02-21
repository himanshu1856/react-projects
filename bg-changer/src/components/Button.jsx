const bgVariants = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  red: "bg-red-600 hover:bg-red-700",
  yellow: "bg-yellow-600 hover:bg-yellow-700",
  gray: "bg-gray-800 hover:bg-gray-900",
};

const textVariants = {
  white: "text-white",
  black: "text-black",
  gray: "text-gray-900",
};

export default function Button({
  text,
  bgColor = "blue",
  textColor = "white",
  setContainerBg,
}) {
  const classes = `
    ${bgVariants[bgColor]}
    ${textVariants[textColor]}
    px-6 py-2 rounded-lg
    transition duration-200
  `;

  const setBg = function(){
    setContainerBg(bgColor)
  }

  return (
    <button onClick={setBg} className={classes}>
      {text}
    </button>
  );
}
