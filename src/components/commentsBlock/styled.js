import styled from "styled-components";

export const containerComments = styled.div``;

export const titleComments = styled.h5`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const blockComments = styled.div`
  display: flex;
  flex-direction: column;
`;

export const comment = styled.div`
  border: 1px solid rgba(13, 110, 253, 0.25);
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 15px;
  background-color: rgba(13, 110, 253, 0.25);
`;

export const headerComment = styled.h5``;

export const textComment = styled.div``;
