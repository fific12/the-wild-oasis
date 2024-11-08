import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yfvlqjcopozcwjsjohra.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmdmxxamNvcG96Y3dqc2pvaHJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc5MTY4NDQsImV4cCI6MjA0MzQ5Mjg0NH0.okiDGdj7ipMjWXxGH05MGNzauxeX9nptaUrfc2RlD3c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
