
  import { useCallback, useState } from "react";

  export const useBoolean = initial => {
    const [value, setValue] = useState(initial);
    return {
      value,
      setValue,
      toggle: useCallback(() => setValue(v => !v)),
      setTrue: useCallback(() => setValue(true)),
      setFalse: useCallback(() => setValue(false))
    };
  };
    