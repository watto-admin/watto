import { createClient } from "@supabase/supabase-js";

export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_watto__SUPABASE_URL;
  const supabaseServiceKey = process.env.watto__SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    // In production, this should throw. In dev, it might be helpful to log a warning if missing.
    // However, for the action to work, they are required.
    throw new Error(
      "Missing Supabase environment variables: NEXT_PUBLIC_watto__SUPABASE_URL or watto__SUPABASE_SERVICE_ROLE_KEY",
    );
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
