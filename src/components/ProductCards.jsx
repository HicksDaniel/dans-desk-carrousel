import React, { useState } from "react";

import { CustomCard, CustomCardContent, CustomTypography } from "../styled";

export default function ProductCards({ card, onClick, isChosen }) {
  const { id, name, image } = card;

  return (
    <CustomCard onClick={() => onClick(id)} className="CustomCard" key={id}>
      <CustomCardContent
        className="CustomCardContent"
        style={{ border: isChosen === id && "2px solid blue" }}
      >
        <div className="image-container">
          <img
            style={{
              width: isChosen === id ? "136px" : "140px",
            }}
            src={image}
          />
        </div>
        <CustomTypography className="CustomTypography">{name}</CustomTypography>
      </CustomCardContent>
    </CustomCard>
  );
}
