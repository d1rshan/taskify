import { handler } from "@/actions/create-board/index";
import { db } from "@/lib/db";
import { boardsTable } from "@/lib/db/schema";

export default async function OrganizationPage() {
  const boards = await db.select().from(boardsTable);
  return (
    <div>
      <form action={handler}>
        <input
          name="title"
          type="text"
          placeholder="Enter board name"
          className="p-2 border border-black rounded-lg"
        />
      </form>
      <div className="flex flex-col gap-1">
        {boards.map((board) => (
          <span key={board.id}>{board.title}</span>
        ))}
      </div>
    </div>
  );
}
