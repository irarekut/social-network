import styled from "styled-components";

export const blockPost = styled.div`
  width: 900px;
  background-color: rgba(13, 110, 253, 0.25);
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const titlePost = styled.h3``;

export const containerPost = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const textPost = styled.div``;

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

export const comment = styled.div``;

export const containerSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
