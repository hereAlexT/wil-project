"use client";
import { createClient } from "@/utils/supabase/client";
export default async function getAllApprovedPosts() {
  const supabase = createClient();
  return supabase
    .from("posts")
    .select("*")
    .is("is_approved", true)
    .throwOnError();
}
