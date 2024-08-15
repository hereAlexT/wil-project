"use client";
import { createClient } from "@/utils/supabase/client";
export default async function postNewPost({ body }: { body: string }) {
  const supabase = createClient();
  return supabase.from("posts").insert([{ body }]).select("*");
}
