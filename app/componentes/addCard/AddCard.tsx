'use client';
import { useDispatch, useSelector } from "react-redux"
import { addCard } from "@/app/store/slices/cardSlice";
import { useForm } from "react-hook-form";
import { AppState } from "@/app/store/store";

enum Categoria {
    Backlog = "Backlog",
    Desenvolvendo = "Desenvolvendo",
    Concluido = "Concluido"
}

interface CardAddData {
    title: string;
    categoria: Categoria;
}

export default function AddCard() {
    const {register, handleSubmit} = useForm<CardAddData>();
    const cards = useSelector((state: AppState)=> state.cards.cards);
    const dispatch = useDispatch();

    function onSubmit(data: CardAddData) {
        const newId = cards.length > 0 ? cards[cards.length - 1].id + 1 : 1;
        const newCard = {id: newId, title: data.title, categoria: data.categoria, description: ""}
        dispatch(addCard(newCard))
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mb-5">
                <label htmlFor="title">Titulo: </label>
                <input type="text"  id="title" {...register("title", {required: true})} className="border border-black rounded"/>
                <select {...register("categoria", {required: true})} id="categoria" className="border border-black rounded">
                    <option value={Categoria.Backlog}>Backlog</option>
                    <option value={Categoria.Desenvolvendo}>Desenvolvendo</option>
                    <option value={Categoria.Concluido}>Concluido</option>
                </select>
                <button type="submit" className="bg-green-500 rounded px-3">Criar</button>
            </form>
        </>
    )
}