import React, { useEffect, useState } from "react";
import { Container, Button, Spinner } from "react-bootstrap";
import { AboutUserBlock } from "../aboutUserBlock/aboutUserBlock";
import { PostsBlock } from "../postsBlock/postsBlock";
import { useGetUserPostsQuery, useGetUserQuery } from "../../api/api";

export const MiddleUserPageBlock = (props) => {
  const [dataPosts, setDataPosts] = useState();
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [user, setUser] = useState();
  const [isUser, setIsUser] = useState(true);
  const { data, isLoading } = useGetUserPostsQuery(props.id);
  const { data: dataUser, isLoading: isLoadingUser } = useGetUserQuery(
    props.id
  );

  useEffect(() => {
    setTimeout(() => {
      if (typeof data !== "undefined") {
        setDataPosts(data);
        setIsLoadingPosts(isLoading);
      }
    }, 5000);
  }, [data, isLoading]);
  useEffect(() => {
    setTimeout(() => {
      if (typeof dataUser !== "undefined") {
        setUser(dataUser);
        setIsUser(isLoadingUser);
      }
    }, 5000);
  }, [dataUser, isLoadingUser]);
  return (
    <Container>
      <Button
        href="/"
        size="lg"
        variant="outline-primary"
        className="mt-5 pl-5"
      >
        Назад
      </Button>
      {isUser === false ? (
        <AboutUserBlock
          name={user.name}
          info={user.company.catchPhrase}
          isLoading={isUser}
        />
      ) : (
        <Container className="d-flex mt-5 justify-content-center">
          <Spinner className="mt-5" animation="grow" variant="info" />
        </Container>
      )}
      <PostsBlock
        data={dataPosts}
        isLoading={isLoadingPosts}
        isLoadingUser={isUser}
      />
    </Container>
  );
};
