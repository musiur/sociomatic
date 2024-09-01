"use client";

import { Button } from "@/components/ui/button";
import { Delete, Sun } from "lucide-react";
import { Action___DELETE__Review } from "./actions";
import { useState } from "react";

const DeleteReview = ({ id }: { id: string }) => {
  const [freeze, setFreeze] = useState(false);
  const HandleDelete = async () => {
    setFreeze(true);
    const result = await Action___DELETE__Review(id);

    setFreeze(false);
  };
  return (
    <Button
      size="icon"
      variant="destructive"
      disabled={freeze}
      onClick={() => HandleDelete()}
    >
      {freeze ? <Sun className="animate-spin" /> : <Delete />}
    </Button>
  );
};

export default DeleteReview;
