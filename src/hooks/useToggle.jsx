import { useState } from "react";

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(Boolean(initialValue));

  function toggleValue() {
    setValue(!value);
  }

  return [value, toggleValue];
}
