import Accordion from "./Accordion";

//items object - hardcoded data

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favourite front end library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use react by creating components",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
