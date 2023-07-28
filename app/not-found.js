"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    redirect("/");
  }, []);

  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}
