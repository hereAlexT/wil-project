"use client";
import { createClient } from "@/utils/supabase/client";
export default async function getAllPosts() {
  const supabase = createClient();
  return supabase.from("posts").select("*").throwOnError();
}
