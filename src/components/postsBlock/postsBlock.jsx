/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Button, Container, Image, Spinner } from "react-bootstrap";
import * as S from "./styled";
import { CommentsBlock } from "../commentsBlock/commensBlock";
import { useGetPostsQuery } from "../../api/api";

export const PostsBlock = (props) => {
  const [page, setPage] = useState(1);
  const onClick = () => {
    setPage(page + 1);
    console.log(page);
  };

  useEffect(() => {
    const { data } = useGetPostsQuery();
    console.log(data, "sss");
  }, []);

  return (
    <Container className="d-flex flex-wrap  justify-content-evenly row gy-5 mt-1 pt-5">
      <Button onClick={onClick}>tyk</Button>
      {props.isLoading === false ? (
        props.data.map((i) => (
          <S.blockPost key={i.id}>
            <S.linkPost href={`/user/${i.userId}`}>
              <Image
                style={{ width: "50px", height: "50px" }}
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st=1687963430~exp=1687964030~hmac=d029babde8522e478989ec9c0abb2d645b29f96393c0505377cd84bbdb2e6c1b"
                roundedCircle
              />
            </S.linkPost>
            <S.containerPost>
              <S.titlePost>{i.title}</S.titlePost>
              <S.textPost>{i.body}</S.textPost>
              <CommentsBlock postId={i.id} />
            </S.containerPost>
          </S.blockPost>
        ))
      ) : (
        <S.containerSpinner>
          <Spinner animation="grow" variant="info" />
        </S.containerSpinner>
      )}
    </Container>
  );
};
