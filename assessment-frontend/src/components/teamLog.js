import React, { useEffect, useState } from 'react'

function TeamLog(){

    const [getLogs, SetGetLogs] = useState([]);//([{ TeamName: 'No team', Points: 0, PL:0, GD: 0 }]);

    const getLogData = async ()=>{

                const apiUrl = 'http://localhost:4000/team';
            const apiResponse = await fetch(apiUrl)
            .then((response) => response.json())
            .then((data)=> {
                console.log(data);

                SetGetLogs(data);
            })

            
    }

    useEffect(()=>{

        getLogData();
        
        
    },[]);


  return (
    <div>
      <h3>Premier Soccer League</h3>
        {getLogs.map((log)=>{
            <div>{log.TeamName}</div>

        })}

    </div>
  )
}

export default TeamLog
