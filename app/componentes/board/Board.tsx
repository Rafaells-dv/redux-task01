'use client'
import { useDispatch, useSelector } from "react-redux";
import CardBoard from "../cardBoard/CardBoard";
import { AppState } from "@/app/store/store";
import { DragEvent } from "react";
import { moveCard } from "@/app/store/slices/cardSlice"

enum Categoria {
    Backlog = "Backlog",
    Desenvolvendo = "Desenvolvendo",
    Concluido = "Concluido"
}

export default function Board() {
    const cards = useSelector((state: AppState) => state.cards.cards)
    const dispatch = useDispatch();

    const getCardsByCategoria = (categoria: Categoria) => {
        return cards.filter(card => card.categoria === categoria);
    }

    function handleDrop(e: DragEvent<HTMLDivElement>, newCategoria: Categoria) {
        e.preventDefault();
        const cardId = Number(e.dataTransfer.getData("cardId"));
        dispatch(moveCard({ id: cardId, newCategoria }));
    }

    function handleDragOver(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
    }

    return(
        <>
            <div className="grid grid-cols-3 gap-3 min-h-[400px] w-full">
            {Object.values(Categoria).map((categoria, index) => (
                <div 
                    key={index}
                    className="w-100 border border-black rounded p-5 pt-3 flex flex-col gap-2 min-h-[300px]"
                    onDrop={(e) => handleDrop(e, Categoria[categoria])}
                    onDragOver={handleDragOver}
                >
                    <h3 className="text-2xl mb-5">{categoria}</h3>
                    {getCardsByCategoria(Categoria[categoria]).map(card => 
                        <CardBoard key={card.id} cardData={card}/>
                    )}
                </div>
            ))}
            </div>
        </>
    )
}