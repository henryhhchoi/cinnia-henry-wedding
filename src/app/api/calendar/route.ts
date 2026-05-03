export async function GET() {
  return new Response(
    JSON.stringify({ error: "Calendar export not yet implemented." }),
    {
      status: 501,
      headers: { "Content-Type": "application/json" },
    }
  );
}
