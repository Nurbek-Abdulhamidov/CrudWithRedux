import TodosItem from "./todos-item";
import { useSelector } from "react-redux";

const TodosItems = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <ul className="list-group list-group-flush">
      {todos.length > 0 ? (
        todos.map((item) => (
          <TodosItem title={item.title} key={item.id} id={item.id} isDone={item.isDone}/>
        ))
      ) : (
        <h3 className="text-center mt-3 mb-3">Todos not created yet</h3>
      )}
    </ul>
  );
};
export default TodosItems;
