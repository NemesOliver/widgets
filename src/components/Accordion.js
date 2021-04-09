import React, { useState } from "react";

const Accordion = ({ items }) => {
  //state
  const [activeIndex, setActiveIndex] = useState(null);

  //event handlers
  const onTitleClick = (index) => {
    setActiveIndex(index);
    // console.log(index);
  };

  //render items
  const renderedItems = items.map((item, index) => {
    //active toggle
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleClick(index)} className={`title ${active}`}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
