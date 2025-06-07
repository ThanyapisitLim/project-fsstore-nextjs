"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = () => {
    // ลบข้อมูล user จาก localStorage
    localStorage.removeItem("userName");

    // หรือถ้ามี token ก็ลบ token ด้วย เช่น
    // localStorage.removeItem("token");

    // พาไปหน้า login หลัง sign out
    router.push("/login");
  };

  return (
    <Button onClick={handleSignOut} className="bg-black hover:bg-gray-800 text-white">
      Sign Out
    </Button>
  );
}
