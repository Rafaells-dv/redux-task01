import Counter from "./componentes/counter/Counter";
import TodoContainer from "./componentes/todoContainer/TodoContainer";
import Inicio from "./inicio/page";

export default function Home() {
  return (
    <>
      <section className="container">
        <Inicio/>
        <Counter />
        <TodoContainer />
      </section>
    </>
  );
}
