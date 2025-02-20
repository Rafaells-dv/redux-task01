import Counter from "./componentes/counter/Counter";
import KanbanContainer from "./componentes/kanbanContainer/KanbanContainer";
import TodoContainer from "./componentes/todoContainer/TodoContainer";
import Inicio from "./inicio/page";

export default function Home() {
  return (
    <>
      <section className="container flex flex-col gap-5">
        <Inicio/>
        <Counter />
        <TodoContainer />
        <KanbanContainer />
      </section>
    </>
  );
}
