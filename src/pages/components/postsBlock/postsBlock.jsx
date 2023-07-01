import React, { useState } from "react";
import { Container, Image, Spinner } from "react-bootstrap";
import * as S from "./styled";
import { useGetPostsQuery } from "../../../api/api";

export const PostsBlock = () => {
  const [commentsVisible, setCommentsVisible] = useState(false);
  const HandleClickComments = () => {
    setCommentsVisible(!commentsVisible);
  };

  const { dataPosts, isLoadingPosts } = useGetPostsQuery();
  const { dataComments, isLoadingComments } = useGetPostsQuery();

  return (
    <Container
      style={{ height: "100vh" }}
      className="d-flex flex-wrap  justify-content-evenly row gy-5 mt-1 pt-5"
    >
      {isLoadingPosts === false ? (
        dataPosts.map((i) => (
          <S.blockPost key={i.id}>
            <Image
              style={{ width: "50px", height: "50px" }}
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st=1687963430~exp=1687964030~hmac=d029babde8522e478989ec9c0abb2d645b29f96393c0505377cd84bbdb2e6c1b"
              roundedCircle
            />
            <S.containerPost>
              <S.titlePost>{i.title}</S.titlePost>
              <S.textPost>{i.body}</S.textPost>
              <S.containerComments>
                <S.titleComments onClick={HandleClickComments}>
                  Комментарии
                </S.titleComments>
                {isLoadingComments === false ? (
                  dataComments.map((comment) => (
                    <S.blockComments key={comment.id}>
                      <S.comment>комментарий 1</S.comment>
                      <S.comment>комментарий 2</S.comment>
                    </S.blockComments>
                  ))
                ) : (
                  <Spinner animation="grow" variant="info" />
                )}
                {commentsVisible ? <S.lala></S.lala> : null}
              </S.containerComments>
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
