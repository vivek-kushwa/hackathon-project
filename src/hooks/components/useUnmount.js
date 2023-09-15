import { useEffect } from "react";

const useUnmount = (cb) => {
  useEffect(() => {
    return cb;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUnmount;
