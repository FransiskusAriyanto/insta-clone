import { Container } from "@chakra-ui/react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      <FeedPost img='/img1.png' username='frns.ari' avatar='profilepic.JPG' />
      <FeedPost img='/img2.png' username='hehe' avatar='img2.png' />
      <FeedPost img='/img3.png' username='bekantan' avatar='img3.png' />
      <FeedPost img='/img4.png' username='uncle mutu' avatar='img4.png' />
    </Container>
  );
};

export default FeedPosts;
