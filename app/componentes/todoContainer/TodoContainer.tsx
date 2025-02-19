import Tasks from "../tasks/Tasks";

export default function TodoContainer () {
    return (
        <>
            <div className="m-auto p-5 bg-white rounded text-black flex flex-col items-center justify-center">
                <h1 className="text-3xl mb-5">ToDo List</h1>
                <Tasks />
            </div>
        </>
    )
}