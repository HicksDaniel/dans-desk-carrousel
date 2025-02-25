import React, { useState } from "react";

import { CustomCard, CustomCardContent, CustomTypography } from "../styled";

export default function ProductCards({ card, onClick, isChosen }) {
  const { id, name, image } = card;

  return (
    <CustomCard
      onClick={() => onClick(id)}
      className="CustomCard"
      key={id}
      sx={{
        border: isChosen === id && "2px solid blue",
      }}
    >
      <CustomCardContent className="CustomCardContent">
        <div className="image-container">
          <img
            // onClick={() => console.log(selected)}
            style={{ width: isChosen === id ? "96px" : "100px" }}
            src={image}
          />
        </div>
        <CustomTypography className="CustomTypography">{name}</CustomTypography>
      </CustomCardContent>
    </CustomCard>
  );
}
