import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zpxkrjqeghoovvniakas.supabase.co';
const supabaseKey = 'sb_publishable_UqQAWm_DN7AGs_3A9-ZY7w_g2d4o1rt';
export const supabase = createClient(supabaseUrl, supabaseKey);