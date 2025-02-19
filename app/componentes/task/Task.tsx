import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, removeTask } from "@/app/store/slices/taskSlice";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

interface Task {
    id: number;
    title: string;
}

interface TaskProps {
    taskData: Task;
}

export default function Task({taskData}: TaskProps) {
    const [isDone, setIsDone] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [value, setValue] = useState<string>(taskData.title);
    const dispatch = useDispatch();

    return (
        <>
            <div className="flex gap-2 items-center">
                {
                    isEditing 
                    ? (
                        <>
                            <input type="checkbox" onChange={() => setIsDone(!isDone)} name="task-check" disabled />
                            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="border-b"/>
                            <button 
                            className="bg-green-300 px-2 rounded" 
                            onClick={() => {
                                dispatch(editTask({id: taskData.id, newTitle: value}))
                                setIsEditing(false);
                            }}
                            >Salvar</button>
                            <button className="bg-red-300 px-2 rounded" onClick={()=> setIsEditing(false)}>Cancelar</button>
                        </>
                    )
                    : (
                        <>
                            <input type="checkbox" onChange={() => setIsDone(!isDone)} name="task-check" />
                            <p className={isDone ? ('line-through') : ''}>{taskData.title}</p>
                            <button className="bg-blue-300 px-2 py-1 rounded" onClick={() => setIsEditing(true)}><FaRegEdit /></button>
                            <button className="bg-red-500 px-2 py-1 rounded" onClick={() => dispatch(removeTask(taskData.id))}><FaRegTrashAlt className="text-white-500"/></button>
                        </>
                    )
                }
                
            </div>
        </>
    )
}