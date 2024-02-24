import ToDoCard from './ToDoCard';
import { CardContent } from './ui/card';

function ToDoList(props) {
  const { todos } = props;

  return (
    <div className="w-full max-w-md space-y-2">
      {todos.map((todo, todoIndex) => {
        return (
          <ToDoCard
            key={todoIndex}
            {...props}
          >
            <CardContent className="py-2">{todo}</CardContent>
          </ToDoCard>
        );
      })}
    </div>
  );
}

export default ToDoList;
