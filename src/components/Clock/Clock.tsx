import { timeEnd } from "console";
import { useEffect, useState } from "react";

function Clock() {
    const time = new Date().toLocaleTimeString()

    const [currentTime, setCurrentTime] = useState(time)
    const updateTime = () => {
        let time = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }

    useEffect(()=>{
        const update = setInterval(()=>{
            updateTime()
        }, 1000)
        
        return ()=>clearInterval(update)
       
    }, [time])

  return (
    <div style={{border: 'solid 2px #00c853', width: '290px', borderRadius: '20px', textAlign: 'center'}}>
      <h3 style={{margin: '10px'}}>{currentTime}</h3>
    </div>
    );
}

export default Clock;
