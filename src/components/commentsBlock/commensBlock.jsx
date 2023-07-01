/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useGetCommentsQuery } from "../../api/api";
import { Spinner } from "react-bootstrap";
import * as S from "./styled";

export const CommentsBlock = (props) => {
  const [commentsVisible, setCommentsVisible] = useState(false);
  const HandleClickComments = () => {
    setCommentsVisible(!commentsVisible);
  };
  const { data, isLoading } = useGetCommentsQuery(props.postId);

  return (
    <S.containerComments>
      <S.titleComments onClick={HandleClickComments}>
        Комментарии
      </S.titleComments>
      {commentsVisible ? (
        <S.blockComments>
          {isLoading === false ? (
            data.map((comment) => (
              <S.comment key={comment.id}>
                <S.headerComment>{comment.email}</S.headerComment>
                <S.textComment>{comment.body}</S.textComment>
              </S.comment>
            ))
          ) : (
            <Spinner />
          )}
        </S.blockComments>
      ) : null}
    </S.containerComments>
  );
};
