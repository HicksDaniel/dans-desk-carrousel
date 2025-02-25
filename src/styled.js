import styled from "styled-components";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

export const CustomBox = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: "row";
  align-items: "center";
  align-content: "center";
  justify-content: "center";
  width: 100%;
  height: 200px;
`;

export const Carrousel = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 85%;
  align-content: space-around;
`;

export const CustomCard = styled(Card)`
  &.MuiPaper-root {
    display: flex;
    padding: 0;

    height: 70%;
    background: transparent;
  }
`;
export const CustomCardContent = styled(CardContent)`
  display: flex;
  height: 80%;
  justify-content: space-between;
  margin: 2px;
  margin-bottom: 0px;
  padding: 0;
  flex-flow: column nowrap;

  & .image-container {
    margin-top: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    margin-bottom: 0px;
  }
`;
export const CustomTypography = styled(Typography)`
  &.MuiTypography-root {
    margin-bottom: 10px;
    font-size: 8px;
    text-align: center;
    color: wheat;
  }
`;
