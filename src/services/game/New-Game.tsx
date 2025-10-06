
export const NewGame = async (data: { host_id: string }) => {
  try {
    const response = await fetch("/api/new-game", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create game session");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error creating new game session:", error);
    throw error;
  }
};

