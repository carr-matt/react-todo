import { Button } from './ui/button';
import { Input } from './ui/input';
import { PlusIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

function ToDoInput(props) {
  const [todoValue, setTodoValue] = useState('');
  const { handleAddTodo } = props;

  return (
    <header className="flex w-full max-w-md items-center space-x-2 my-2">
      <Input
        placeholder="Enter to-do item..."
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <Button
        variant="outline"
        type="submit"
        onClick={() => {
          handleAddTodo(todoValue);
          setTodoValue('');
        }}
      >
        <PlusIcon className="m-2" />
        <span className="sr-only">Add</span>
      </Button>
    </header>
  );
}

export default ToDoInput;
