import { useEffect } from "react";

const useMount = (cb) => {
  useEffect(() => {
    cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMount;
