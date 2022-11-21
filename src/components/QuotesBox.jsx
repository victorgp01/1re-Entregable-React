import React from "react";
import BtnQuote from "./BtnQuote";

const QuotesBox = ({ quoteRamdom, handleClick, colorRamdon }) => {
  const objStyle = {
    color: colorRamdon,
  };

  const objStyleBtn = {
    backgroundColor: colorRamdon,
  };

  return (
    <article className="card" style={objStyle}>
      <i className="card__icon fa-solid fa-quote-left"></i>
      <p className="card__quote">{quoteRamdom.quote}</p>
      <h1 className="card__author">{quoteRamdom.author}</h1>
      <BtnQuote objStyleBtn={objStyleBtn} handleClick={handleClick} />
    </article>
  );
};

export default QuotesBox;
