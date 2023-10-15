"use client";

import { useForm } from "./hooks/useForm";

export function SearchBar() {
  const { onHandleChange } = useForm();
  return (
    <div>
      <form onSubmit={() => {}}>
        <input
          type="text"
          name="country"
          placeholder="Search"
          onChange={onHandleChange}
        />
      </form>
    </div>
  );
}
