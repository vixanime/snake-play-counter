export default async function handler(req, res) {
  const SUPABASE_URL = 'https://rstnrqtlydnuolufcuby.supabase.co';
  const SUPABASE_KEY = 'your-key-here';

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/snake_game_stats?id=eq.1&select=plays`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });

    const data = await response.json();
    const playCount = data?.[0]?.plays ?? "0";

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
      schemaVersion: 1,
      label: "plays",
      message: `${playCount}`, // must be a string
      color: "blue"
    });

  } catch (err) {
    res.status(500).json({
      schemaVersion: 1,
      label: "plays",
      message: "error",
      color: "red"
    });
  }
}
