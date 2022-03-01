import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeTodos } from "./actions/todos";
import TodosHeader from "./components/todos-header";
import TodosForm from "./components/todos-form";
import TodosItems from "./components/todos-items";
import TodosFooter from "./components/todos-footer";

function App() {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todos);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    dispatch(initializeTodos(todos));
  }, []);

  return (
    <div className="components">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <TodosHeader length={todoItems.length} />
            <TodosForm />
            <TodosItems />
            <TodosFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
