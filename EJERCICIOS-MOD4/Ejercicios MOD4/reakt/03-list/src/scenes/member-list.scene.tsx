import React from "react";
import { AppLayout } from "@/layouts";
import { MemberListContainer } from "@/pods/member-list/member-list.container";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router";

export const MemberListScene: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
        <MemberListContainer
          onSelect={(id) => {
            navigate(routes.detail(id));
          }}
        />
    </AppLayout>
  );
};