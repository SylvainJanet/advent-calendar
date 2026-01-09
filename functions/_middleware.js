export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.pathname.startsWith("/puzzles/")) {
    const puzzleId = url.pathname.split("/")[2];
    return new Response(JSON.stringify({
      id: puzzleId,
      title: "Dummy puzzle",
      text: { type: "list", content: ["Example line"] },
      hints: ["Hint 1", "Hint 2"],
      unlock_next: null
    }), {
      headers: { "Content-Type": "application/json" }
    });
  }

  // fallback to static site
  return context.next();
}