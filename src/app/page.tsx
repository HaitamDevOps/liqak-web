import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Hello() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/"); // or return a login link
  }

  return <h1>Hello {session.user?.name}</h1>;
}
