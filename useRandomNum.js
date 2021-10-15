import { useState } from 'react';

const useRandomNum = (low, high) => {
    const [num, setNum] = useState(0);
    const genNum = () => {
        setNum(Math.floor((Math.random() * (high-low)) + low));
    }
    return { num, genNum };
}

export default useRandomNum;