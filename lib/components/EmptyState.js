import React from "react";
import { Heading } from "@chakra-ui/react";
import AddBlogModal from "./AddBlogModal";
import DashboardTemplate from "./DashboardTemplate";

export default function EmptyState() {
  return (
    <DashboardTemplate>
      <Heading>You haven't added any sites</Heading>
      <AddBlogModal>Add your first site</AddBlogModal>
    </DashboardTemplate>
  );
}
