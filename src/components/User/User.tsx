import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  let {id}: any = useParams();
  const [user, setUser] = useState({} as any);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(JSON.stringify(response.data)))
      .then(() => setLoading(false))
    }, [setUser]
  );

  return(
    <React.Fragment>
    {loading ? (<p>It's loading...</p>) : (
      <div >
        {user.split(',').join('{').split('{').join('}').split('}').map((str: string, i: number) => <p key={i}>{str.replace('"', '').replace('"', '').replace('"', '').replace('"', '').replace(':', ' : ')}</p>)}
        <a style={{paddingBottom: '50px'}} href="/">Return</a>
    </div>
    )}
    </React.Fragment>
  )
}

export default User;