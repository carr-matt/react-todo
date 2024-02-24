import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import { ThemeProvider } from './components/theme-provider';
import { useState } from 'react';

export interface Todos {
  todos: string[];
}

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  function handleAddTodo(newTodo: string) {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  function handleRemoveTodo(index: number) {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  }

  function handleEditTodo(index: number, newTodo: string) {
    const newTodos = todos.map((todo, i) => (i === index ? newTodo : todo));
    setTodos(newTodos);
  }

  function handleClearTodos() {
    setTodos([]);
  }

  return (
    <ThemeProvider
      defaultTheme="system"
      storageKey="vite-ui-theme"
    >
      <main className="p-2 flex flex-col items-center w-full">
        <ToDoInput handleAddTodo={handleAddTodo} />
        <ToDoList
          todos={todos}
          handleRemoveTodo={handleRemoveTodo}
        />
      </main>
    </ThemeProvider>
  );
}

export default App;
