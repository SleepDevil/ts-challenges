import { MyPick } from "../types";
import { Equal, Expect } from "../utils";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

test(`res1, res2为true`, () => {
  const res1: Expect<Equal<Expected1, MyPick<Todo, "title">>> = true;
  const res2: Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>> =
    true;

  expect(res1).toBe(true);
  expect(res2).toBe(true);
});
