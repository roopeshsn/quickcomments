import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { createBlog } from "../db";
import { useAuth } from "../auth";
import { serverTimestamp } from "firebase/firestore";

export default function AddBlogModal({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const toast = useToast();

  const createSite = ({ blogNameInput, blogUrlInput }) => {
    createBlog({
      userId: user.uid,
      createdAt: serverTimestamp(),
      blogNameInput,
      blogUrlInput,
    });
    toast({
      title: "Success!",
      description: "We've added your blog for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Button maxW="200px" my={4} onClick={onOpen}>
        {children}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(createSite)}>
          <ModalHeader>Add Blog</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                autoFocus={true}
                id="blog-name-input"
                placeholder="Your site name"
                {...register("blogNameInput", { required: true })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Blog URL</FormLabel>
              <Input
                id="blog-url-input"
                placeholder="Your Blog URL"
                {...register("blogUrlInput", { required: true })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
