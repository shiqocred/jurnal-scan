import { permanentRedirect } from "next/navigation";

const DashboardPage = () => {
  permanentRedirect("/dashboard/home");
};

export default DashboardPage;
