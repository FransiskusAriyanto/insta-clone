import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name='Fransiskus Ariyanto' size={"md"} src='/profilepic.JPG' />
        <Text fontSize={12} fontWeight={"bold"}>
          frns.ari
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
