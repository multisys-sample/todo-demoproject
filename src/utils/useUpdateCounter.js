import { useState, useEffect } from "react";

export default function useUpdateCounter(update) {
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    setUpdateCount((updateCount) => updateCount + 1);
  }, [update]);

  return [updateCount];
}
