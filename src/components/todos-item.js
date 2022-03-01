import { useDispatch } from "react-redux";
import { removeTodo, markTodoDone } from "../actions/todos";

const TodosItem = ({ id, title,isDone }) => {
  const dispatch = useDispatch();

  const handleMarkToDo = (e) => {
    dispatch(
      markTodoDone({
        id,
        title,
        isDone: e.target.checked,
      })
    );
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onChange={handleMarkToDo}
        />
        <label className={`form-check-label ${isDone ? 'text-decoration-line-through' : ''}`} htmlFor="flexCheckDefault">
          {title}
        </label>
      </div>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(removeTodo(id))}
      >
        Remove
      </button>
    </li>
  );
};
export default TodosItem;
