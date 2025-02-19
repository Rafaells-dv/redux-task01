'use client';
import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "../../store/store";
import { addTask } from "@/app/store/slices/taskSlice";
import Task from "../task/Task";
import { useForm } from "react-hook-form";

interface TaskFormData {
    title: string;
}

export default function Tasks() {

    const tasks = useSelector((state: AppState) => state.tasks.tasks)
    const dispatch = useDispatch();
    const {register, handleSubmit, reset} = useForm<TaskFormData>();

    function onSubmit(data: TaskFormData) {
        const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
        const newTask = {id: newId, title: data.title}
        dispatch(addTask(newTask));
        reset()
    }

    return (
        <>
            <div className="flex flex-col gap-5">
                <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
                    <label htmlFor="title" className="text-2xl">Tarefa: </label>
                    <input type="text" id="title" {...register("title", { required: true })} placeholder="Nova tarefa..." required className="border border-black rounded px-2 py-1"/>
                    <button type="submit" className="bg-green-500 py-1 px-4 rounded">Adicionar</button>
                </form>
                <ul className="flex flex-col gap-4">
                { tasks.length > 0 
                ? (

                    tasks.map((task) => 
                        <Task key={task.id} taskData={task}/>
                    )
                ) : (
                    <p>Nenhuma tarefa a fazer!</p>
                )
                }
                </ul>
            </div>
        </>
    )
}