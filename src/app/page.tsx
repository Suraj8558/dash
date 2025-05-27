"use client";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { RootState } from "@/store/store";
import {
  increment,
  decrement,
  reset,
  multiply,
} from "@/store/features/counterSlice";

export default function Home() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4">Counter: {count}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="mr-2 bg-green-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="mr-2 bg-red-500 text-white px-4 py-2 rounded"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(multiply())}
        className="mr-2 bg-orange-500 text-white px-4 py-2 rounded"
      >
        multiply by 2
      </button>
      <button
        onClick={() => dispatch(reset())}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Reset
      </button>
    </main>
  );
}
