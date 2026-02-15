-- Active: 1770877587969@@127.0.0.1@5432@postgres

-- Create table for contact submissions
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  
  topic TEXT,
  message TEXT,
  
  -- Metadata for future proofing
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Grant usage to service_role (Admin)
GRANT ALL ON contact_submissions TO service_role;