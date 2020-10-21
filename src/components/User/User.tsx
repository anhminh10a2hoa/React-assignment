import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  let {id}: any = useParams();
  let a: string = "";
  const [user, setUser] = useState({} as any);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data))
      .then(() => setLoading(false))
    }, [setUser]
  );

  for(let info in user){
    if(info == 'address'){
      for(let adr in user.address){
        if(adr !== 'geo'){
          a += `${adr}: ${user.address[adr]} \n`;
        }
      }
    }
    else if(info == 'company'){
      for(let cpn in user.company){
        if(cpn == 'name'){
          a += `Company name: ${user.company[cpn]} \n`;
        }
      }
    }
    else {
      a += `${info}: ${user[info]} \n`;
    }
  }
  return(
    <React.Fragment>
    {loading ? (<p>It's loading...</p>) : (
      <div >
        {a.split('\n').map((str, i) => <p key={i}>{str}</p>)}
        <a href="/">Return</a>
    </div>
    )}
    </React.Fragment>
  )
}

export default User;