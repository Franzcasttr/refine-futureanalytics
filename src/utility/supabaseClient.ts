import { createClient } from '@refinedev/supabase';

// const SUPABASE_URL = 'https://iwdfzvfqbtokqetmbmbp.supabase.co';
const SUPABASE_URL = 'https://ialcmjsitncpzwwdnqot.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhbGNtanNpdG5jcHp3d2RucW90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk0MDMwMzUsImV4cCI6MTk5NDk3OTAzNX0.ki-OZFVsNBXWqsr_GK2Vgv1GAicBD3aTyC_2_HBYrGg';
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDU2NzAxMCwiZXhwIjoxOTQ2MTQzMDEwfQ._gr6kXGkQBi9BM9dx5vKaNKYj_DJN1xlkarprGpM_fU';

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: 'public',
  },
  auth: {
    persistSession: true,
  },
});
