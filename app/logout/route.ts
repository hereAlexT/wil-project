import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) console.error("Error signing out:", error);
  return NextResponse.redirect(new URL("/", request.url));
}
