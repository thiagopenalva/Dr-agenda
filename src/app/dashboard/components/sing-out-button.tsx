"use client";

import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const SingOutButton = () => {
  return (
    <Button
      onClick={() =>
        authClient.signOut({
          fetchOptions: { onSuccess: () => redirect("/authentication") },
        })
      }
    >
      Sair
    </Button>
  );
};

export default SingOutButton;
