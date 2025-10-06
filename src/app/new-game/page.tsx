
import { NewGameForm } from "@/components/form/new-game-form";
import { CreateGameNav } from "@/components/navigation/create-game-menu";

export default function NewGame() {
  return (
    <div className="flex flex-col w-full min-h-screen">
        <CreateGameNav />

      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col w-1/2 justify-center items-center">
          <NewGameForm />
        </div>
      </div>
    </div>
  );
}