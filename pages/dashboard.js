import React from "react";
import EmptyState from "@/lib/components/EmptyState";
import { useAuth } from "@/lib/auth";
import DashboardTemplate from "@/lib/components/DashboardTemplate";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";

export default function Dashboard() {
  const { user } = useAuth();
  const { data } = useSWR("/api/blogs", fetcher);

  console.log(data);

  if (!user) {
    return "Loading...";
  }

  return (
    <DashboardTemplate>
      <EmptyState />
    </DashboardTemplate>
  );
}
