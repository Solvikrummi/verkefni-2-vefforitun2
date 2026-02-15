import type { FC } from 'hono/jsx';

import type { Todo } from '../types.js';
import { TodoList } from './TodoList.js';

type TodoPageProps = {
  todos?: Todo[];
};

export const TodoPage: FC<TodoPageProps> = ({ todos = [] }) => {
const finished = todos.filter(i => i.finished === true)
const unfinished = todos.filter(i => i.finished !== true)

  return (
    <section>
      <p>Halló hono heimur!</p>
      <form method="post" action="/add">
      <input type="text" name="title"/>
      <button>bæta við</button>
      </form>

      <TodoList title="Allur listinn"  todos={todos} />
      <TodoList title="Kláruð verkefni"  todos={finished} />
      <TodoList title="Ókláruð verkefni"  todos={unfinished} />

      <p>Ég fékk {todos.length} verkefni.</p>
    </section>
  );
};
