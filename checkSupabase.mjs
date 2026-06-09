import fs from "fs";
const { createClient } = await import("@supabase/supabase-js");
const env = Object.fromEntries(fs.readFileSync('.env.local','utf-8').split(/\r?\n/).filter(Boolean).map(line => line.split('=',2).map(part => part.trim())).map(([k,v]) => [k,v]));
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
const res = await supabase.from('users').select('*');
console.log(JSON.stringify(res, null, 2));
