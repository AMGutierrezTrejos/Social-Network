import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

const PostPage = () => {
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar
            src="/mauricio-avatar.jpg"
            size={"md"}
            name="Mauricio Gutierrez"
          />
          <Flex>
            <Text fontsize={"sm"} fontWeight={"bold"}>
              MauricioGutierrez
            </Text>
            <Image src="/verified.png" w="4" h={4} ml={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
            <Text fontsize={"sm"} color={"gray.light"}>1d</Text>
        <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>Let's talk about threads.</Text>
    </>
  );
};

export default PostPage;
