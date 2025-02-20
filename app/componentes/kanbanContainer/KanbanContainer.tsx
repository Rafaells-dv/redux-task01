import AddCard from "../addCard/AddCard";
import Board from "../board/Board";

export default function KanbanContainer() {
    return (
        <>
            <div className="w-full bg-white text-black p-5 m-auto mb-10 rounded">
                <h2 className="text-3xl mb-10">KanBan</h2>
                <AddCard />
                <Board />
            </div>
        </>
    )
}