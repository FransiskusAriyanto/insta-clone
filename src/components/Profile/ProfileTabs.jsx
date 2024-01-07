import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3Gap } from "react-icons/bs";
import { LiaIdCardAltSolid } from "react-icons/lia";

const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      gap={{ base: 4, sm: 10 }}
      textTransform={"uppercase"}
      fontWeight={"bold"}
    >
      <Flex
        borderTop={"1px solid white"}
        alignItems={"center"}
        gap={1}
        p={2}
        cursor={"pointer"}
      >
        <Box fontSize={20}>
          <BsGrid3X3Gap />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          POSTS
        </Text>
      </Flex>

      <Flex alignItems={"center"} gap={1} p={2} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsBookmark />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          SAVED
        </Text>
      </Flex>

      <Flex alignItems={"center"} gap={1} p={2} cursor={"pointer"}>
        <Box fontSize={20}>
          <LiaIdCardAltSolid />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          TAGGED
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTabs;
