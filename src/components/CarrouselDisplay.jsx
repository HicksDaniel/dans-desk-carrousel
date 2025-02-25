import React, { useEffect, useState, Fragment } from "react";
import { ProductList } from "../service/ProductList";
import ProductCards from "./ProductCards";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import { CustomBox, Carrousel } from "../styled";

export default function CarrouselDisplay() {
  const [cards, setCards] = useState([]);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [slideDirection, setSlideDirecton] = useState("left");
  const [isSelected, setIsSelected] = useState(0);

  const handleClick = (id) => {
    console.log(id);
    setIsSelected(id);
  };

  const renderedCards = ProductList.map((card) => {
    return (
      <Fragment key={card.id}>
        <ProductCards
          onClick={(id) => handleClick(id)}
          isChosen={isSelected}
          card={card}
        />
      </Fragment>
    );
  });

  useEffect(() => {
    setCards(renderedCards);
  }, [isSelected]);

  return (
    <>
      <CustomBox>
        <div
          onClick={() => {
            console.log(typeof isSelected, isSelected);
          }}
        ></div>
        <Carrousel>{cards}</Carrousel>
      </CustomBox>
    </>
  );
}
