import { TupleToObject } from "../types";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

const result: TupleToObject<typeof tuple> = {
  tesla: "tesla",
  "model 3": "model 3",
  "model X": "model X",
  "model Y": "model Y",
};

test(`tuple to object `, () => {
  expect(JSON.stringify(result)).toBe(
    JSON.stringify({
      tesla: "tesla",
      "model 3": "model 3",
      "model X": "model X",
      "model Y": "model Y",
    })
  );
});
