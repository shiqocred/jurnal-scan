import { permanentRedirect } from "next/navigation";
import React from "react";

const DashboardPage = () => {
  permanentRedirect("/dashboard/home");
};

export default DashboardPage;
