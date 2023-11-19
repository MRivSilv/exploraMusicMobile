// src/supabase-config.ts

import { createClient } from '@supabase/supabase-js';

// Configura tu conexión Supabase
const supabaseUrl = 'https://fxsrewzxujobhmkdpwkm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4c3Jld3p4dWpvYmhta2Rwd2ttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyNjczNDEsImV4cCI6MjAxNTg0MzM0MX0.NkHrOICQ6fnVCjRu4iqFFp_84MB_jzZiwnBSP-eAcpE';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
