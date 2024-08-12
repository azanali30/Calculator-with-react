const ButtonsContainer = ({ onButtonClick }) => {
  const ButtonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div id="button-container">
      {ButtonsName.map((buttonName) => (
        <button id="button" onClick={() => onButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
