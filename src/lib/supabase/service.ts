import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

// Service-role client: bypasses RLS. Server-only, never import from a
// Client Component. Used for lookups that must work before the demandeur
// has a session (e.g. the secteur autocomplete on the D2 form), where the
// underlying table is intentionally readable to `authenticated` only.
export function createServiceClient() {
  return createSupabaseClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}
