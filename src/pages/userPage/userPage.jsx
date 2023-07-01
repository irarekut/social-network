import React from "react";
import { Container, Spinner, Button } from "react-bootstrap";
import { AboutUserBlock } from "../../components/aboutUserBlock/aboutUserBlock";
import { PostsBlock } from "../../components/postsBlock/postsBlock";
import { useParams } from "react-router-dom";
import { useGetUserPostsQuery, useGetUserQuery } from "../../api/api";

export function UserPage() {
  const id = useParams().id;
  const { data: dataPosts, isLoading: isLoadingPosts } =
    useGetUserPostsQuery(id);
  const { data: dataUser, isLoading: isLoadingUser } = useGetUserQuery(id);

  return (
    <Container fluid="true">
      <div className="bg-light bg-gradient vh-300 wh-150">
        <Container>
          <Button
            href="/"
            size="lg"
            variant="outline-primary"
            className="mt-5 pl-5"
          >
            Назад
          </Button>
          {isLoadingUser === false ? (
            <AboutUserBlock
              name={dataUser.name}
              info={dataUser.company.catchPhrase}
              isLoading={isLoadingUser}
            />
          ) : (
            <Spinner />
          )}
          <PostsBlock data={dataPosts} isLoading={isLoadingPosts} />
        </Container>
      </div>
    </Container>
  );
}
