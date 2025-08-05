import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import BlogAdmin from "../../Components/Admin/AdminPanel";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return (
    <div className="p-10">
      <BlogAdmin />
    </div>
  );
}
