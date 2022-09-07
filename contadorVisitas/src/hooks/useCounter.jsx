import { useContext  } from "react";

import  CounterContext  from "../context/counterProvider";

const useCounter = () => {
    return useContext(CounterContext);
}
export default useCounter;