import { useState, useEffect } from "react";

function useHttp(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      (async () => {
        const res = await fetch(url, {
          method: "GET",
        });
        const resolved = await res.json();
        setData(resolved);
      })();
    }
    return () => (isMounted = false);
  }, []);
  return data;
}

export default useHttp;
