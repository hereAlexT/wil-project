"use client";
import { createClient } from "@/utils/supabase/client";
export default async function approvePost({ postId }: { postId: string }) {
  const supabase = createClient();
  return supabase.from("posts").update({ is_approved: true }).eq("id", postId);
}
