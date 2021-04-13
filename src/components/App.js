import { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Search from "./Search";

//items aray - hardcoded data

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

//options array - hardcoded data

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];
const App = () => {
  //state
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        onSelectedChange={setSelected}
        selected={selected}
        options={options}
      />
    </div>
  );
};

export default App;
