import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://tcewrqaqlbmfuzulvblo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZXdycWFxbGJtZnV6dWx2YmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MTA5ODIsImV4cCI6MjA2MzE4Njk4Mn0.CoI1385Tu9oPcHzIvu_pIAyZNdUuivffNPCRyjHS4rs'
);

export default supabase;