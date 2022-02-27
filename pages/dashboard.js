import React from "react";
import EmptyState from "@/lib/components/EmptyState";
import { useAuth } from "@/lib/auth";
import DashboardTemplate from "@/lib/components/DashboardTemplate";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import SiteTable from "@/lib/components/SiteTable";
import SiteHeader from "@/lib/components/SiteHeader";

export default function Dashboard() {
  const { user } = useAuth();
  console.log(user);
  // const { data } = useSWR(user ? ["/api/blogs", user.uid] : null, fetcher);
  const { data } = useSWR("/api/blogs", fetcher);

  if (!user) {
    return "Loading...";
  }

  return (
    <DashboardTemplate>
      {data ? (
        <>
          <SiteHeader />
          <SiteTable blogs={data.blogs} />
        </>
      ) : (
        <EmptyState />
      )}
    </DashboardTemplate>
  );
}
