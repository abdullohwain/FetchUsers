import React, { useEffect, useState } from 'react'

function Button() {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        console.log("Button component chizildi");
        
        return () => {
            console.log("Component tugatildi");
        };
}, [count]);

return (
    <button onClick={()=> setCount((prev) => prev + 1)} type="button">
        count: {count}
    </button>
)
}
export default Button;