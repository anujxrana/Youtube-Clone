import Button from "./Button";

const ButtonList = () => {
  const List = [
    "movie",
    "games",
    "songs",
    "Live",
    "Cricket",
    "Tech",
    "Politics",
    "Cooking",
    "AI",
    "Blockchain",
  ];
  return (
    <div className="flex justify-start my-4">
      {List.map((e, index) => {
        return <Button name={e} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
