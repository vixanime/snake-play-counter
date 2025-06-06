export default async function handler(req, res) {
  const SUPABASE_URL = 'https://rstnrqtlydnuolufcuby.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzdG5ycXRseWRudW9sdWZjdWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2Mjk5OTgsImV4cCI6MjA2NDIwNTk5OH0.HNFCMkQDAyCPgr4tZe5h9XAx8COVSw-M-DIGwOwQ4_gE';

  const response = await fetch(`${SUPABASE_URL}/rest/v1/snake_game_stats?id=eq.1&select=visits`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
  });

  const data = await response.json();

  if (!data || !data[0]) {
    return res.status(500).json({
      schemaVersion: 1,
      label: "visits",
      message: "error",
      color: "red"
    });
  }

  res.status(200).json({
    schemaVersion: 1,
    label: "visits",
    message: `${data[0].visits}`,
    color: "blue"
  });
}
