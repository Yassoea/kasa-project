import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
        <h2>{title}</h2>
        <p onClick={display}>
          <i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}></i>
        </p>
      </div>
      {isOpen && (
        <div className="collapse__dropdown__content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
