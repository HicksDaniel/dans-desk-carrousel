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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
`;

export const Carrousel = styled.div`
  display: flex;
  background-color: transparent;
  width: 60%;
  height: 100%;
  align-content: space-around;
`;

export const CustomCard = styled(Card)`
  &.MuiPaper-root {
    display: flex;
    height: 100%;
    width: 20%;
    align-content: center;
    justify-content: center;
    background: transparent;
  }
`;
export const CustomCardContent = styled(CardContent)`
  display: flex;
  height: 80%;
  align-items: center;
  justify-content: center;
  margin: 2px;
  flex-flow: column nowrap;

  & .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
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
