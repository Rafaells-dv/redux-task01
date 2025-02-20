'use client';
import { FaCheck, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeCard, editCard } from "@/app/store/slices/cardSlice";
import { useState, DragEvent } from "react";


enum Categoria {
    Backlog = "Backlog",
    Desenvolvendo = "Desenvolvendo",
    Concluido = "Concluido"
}

interface Card {
    id: number;
    title: string;
    description: string;
    categoria: Categoria;
}

interface CardBoardProps {
    cardData: Card
}

export default function CardBoard({cardData}: CardBoardProps) {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [title, setTitle] = useState(cardData.title);
    const [description, setDescription] = useState(cardData.description);

    const dispatch = useDispatch();

    function handleDragStart(e: DragEvent<HTMLDivElement>) {
        e.dataTransfer.setData("cardId", cardData.id.toString());
    }

    return (
        <>
            <div
            id={"card-" + cardData.id}
            className="border border-gray-500 rounded flex flex-col gap-4 pt-2 px-4 pb-2"
            draggable={!isEditing}
            onDragStart={handleDragStart}
        >
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-1 w-full mb-2"
                    />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border p-1 w-full mb-2"
                    />
                    <button className="bg-green-500 rounded p-1 flex justify-center" onClick={() => {
                        dispatch(editCard({ id: cardData.id, newTitle: title, newDesc: description }));
                        setIsEditing(false);
                    }}>
                        <FaCheck/>
                    </button>
                </>
            ) : (
                <>
                    <h4 className="text-xl">{cardData.title}</h4>
                    <p>{cardData.description}</p>
                    <div className="w-50">
                        <button className="bg-blue-500 rounded p-1" onClick={() => setIsEditing(true)}>
                            <FaRegEdit />
                        </button>
                        <button className="bg-red-500 rounded p-1 ml-1" onClick={() => dispatch(removeCard(cardData.id))}>
                            <FaRegTrashAlt />
                        </button>
                    </div>
                </>
            )}
            </div>
        </>
    )
}