import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import SingOutButton from "./components/sing-out-button";

const dashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{session?.user.name}</h2>
      <h2>{session?.user.email}</h2>
      <SingOutButton />
    </div>
  );
};

export default dashboardPage;
