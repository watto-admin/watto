-- Active: 1770877587969@@127.0.0.1@5432@postgres
-- Create Enum for submission types
CREATE TYPE contact_form_type AS ENUM ('advertise', 'info', 'buy');

-- Create table for contact submissions
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  submission_type contact_form_type NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  
  -- Specific fields (nullable)
  company TEXT,
  budget TEXT,
  goals TEXT, -- for advertise
  
  topic TEXT,
  message TEXT, -- for info
  
  quantity TEXT, -- for buy
  shipping_country TEXT,
  notes TEXT, -- for buy
  
  -- Metadata for future proofing
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Grant usage to service_role (Admin)
GRANT ALL ON contact_submissions TO service_role;

-- We rely on the server-side Service Role Key to bypass RLS for inserts.
-- If you want to allow client-side inserts (not recommended for public forms without strict policies),
-- you would add:
-- GRANT INSERT ON contact_submissions TO anon;
-- CREATE POLICY "Allow public inserts" ON contact_submissions FOR INSERT WITH CHECK (true);
