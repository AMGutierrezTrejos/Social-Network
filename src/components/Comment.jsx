import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";

const Comment = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src="/mauricio-avatar.jpg" size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize="sm" fontWeight="bold">
              Mauricio Gutierrez
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"} color="gray.light">
                1d
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>

          <Text fontSize={"sm"}>Lorem ipsum dolor sit amet.</Text>
          {/* <Actions liked={liked} setLikes={setLiked} /> */}
          <Text fontSize={"sm"} color={"gray.light"}>
            {100 + (liked ? 1 : 0)} likes
          </Text>
        </Flex>
      </Flex>

      <Divider />
    </>
  );
};

export default Comment;
