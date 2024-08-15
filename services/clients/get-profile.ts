"use client";
import { createClient } from "@/utils/supabase/client";
export default async function getProfile() {
  const supabase = createClient();
  return supabase.from("profiles").select("*").throwOnError();
}
