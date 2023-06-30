/* eslint-disable react/prop-types */
import React from "react";
import { Container, Image } from "react-bootstrap";
import * as S from "./styled";

export const AboutUserBlock = (props) => {
  return (
    <Container className="d-flex flex-wrap column justify-content-evenly mt-5 pt-5">
      <Image
        style={{ width: "250px", height: "250px" }}
        src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st=1687963430~exp=1687964030~hmac=d029babde8522e478989ec9c0abb2d645b29f96393c0505377cd84bbdb2e6c1b"
        rounded
      />
      <S.blockInfo>
        <S.name>{props.name}</S.name>
        <S.titleInfo>Обо мне:</S.titleInfo>
        <S.text>{props.info}</S.text>
      </S.blockInfo>
    </Container>
  );
};
