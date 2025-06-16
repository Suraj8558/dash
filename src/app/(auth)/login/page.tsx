"use client";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { logIn, logOut } from "@/store/features/authSlice";

export default function LoginPage() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Login Status</h1>
      <p>You are currently: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
      <button
        onClick={() => dispatch(isLoggedIn ? logOut() : logIn())}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
