import React, { useEffect } from "react";
import { useGetPostsQuery } from "../../api/api";
import { Container } from "react-bootstrap";
//import { PostsBlock } from "../postsBlock/postsBlock";

export const MiddleMainPageBlock = () => {
  //   const [loading, setLoading] = useState(false);
  //   const [dataPosts, setDataPosts] = useState();

  useEffect(() => {
    const { data } = useGetPostsQuery();
    console.log(data);
    // console.log("aaaaaasss");
    // setDataPosts(data);
    // setLoading(false);
  }, []);
  return (
    <div style={{ minHeight: "100vh" }} className="bg-light bg-gradient wh-150">
      <Container className="vh-150">
        {/* <PostsBlock data={data} isLoading={loading} /> */}
      </Container>
    </div>
  );
};
