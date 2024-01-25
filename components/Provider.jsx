"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

const Provider = ({ children, session }) => {
  return (
    <div>
      <SessionProvider session={session}>{children}</SessionProvider>
    </div>
  );
};

export default Provider;
