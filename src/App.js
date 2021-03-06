import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/Todo/TodoList";
import { useSelector } from "react-redux";

function App() {
  // const dispatch = useDispatch();
  const todoLists = useSelector((state) => state.todoLists);

  return (
    <div>
      <Header numOfLists={todoLists.length} />
      <div className="grid grid-cols-3 gap-8 px-16">
        {todoLists.map((todoList) => (
          <TodoList
            key={todoList.listId}
            listId={todoList.listId}
            title={todoList.title}
            list={todoList.list}
            filter={todoList.filter}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
