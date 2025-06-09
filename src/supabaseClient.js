import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fmxowjhrrygwchjylcqe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZteG93amhycnlnd2NoanlsY3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NjI2ODgsImV4cCI6MjA2NDUzODY4OH0.QOnQ2vmnIzTDuGvHv4kFCe87MI_1t6TwOf6ypnFFJBM';

export const supabase = createClient(supabaseUrl, supabaseKey);
