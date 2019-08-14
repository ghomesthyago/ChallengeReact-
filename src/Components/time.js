import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

function Time () {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
       
        return function cleanup() {
            clearInterval(timerID);
          };
       });

    function tick() {
        setDate(new Date());
    }
    var dNow = format(
        date,
        'DD/MM/YYYY HH:mm A'
      )

    return(
        <span>{dNow}</span>
    );
}

export default Time;