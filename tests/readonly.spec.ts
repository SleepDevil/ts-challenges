import { MyReadonly } from "../types";
import { Equal, Expect } from "../utils";

interface S {
  name: string;
  age: number;
}

const readonlyT: MyReadonly<S> = {
  name: "SleepDevil",
  age: 20,
};

test(`myreadonly等于readonly`, () => {
  const res: Expect<Equal<MyReadonly<S>, Readonly<S>>> = true;

  expect(res).toBe(true);
});
