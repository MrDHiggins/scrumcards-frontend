interface GamePageProps {
  params: { sessionId: string }
}

export default async function GamePage({ params }: GamePageProps) {
  const res = await fetch(`http://localhost:8080/sessions/${params.sessionId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-400">
        <p>Game session not found.</p>
      </div>
    );
  }

  const session = await res.json();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-violet-400 bg-[#0f172a]">
      <h1 className="text-3xl font-bold">
        Game: {session.host_id}
      </h1>
    </div>
  );
}