import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser
        name='Dan Abramov'
        followers={1234}
        avatar='https://bit.ly/dan-abramov'
      />
      <SuggestedUser
        name='Ryan Florence'
        followers={458}
        avatar='https://bit.ly/ryan-florence'
      />
      <SuggestedUser
        name='Christian Nwamba'
        followers={9445}
        avatar='https://bit.ly/code-beast'
      />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2023 FRANSISKUS ARIYANTO FROM{" "}
        <Link
          href='https://www.linkedin.com/in/fransiskus-ariyanto-551672180/'
          target='_blank'
          color={"gray.500"}
          fontSize={14}
        >
          FRATO
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
