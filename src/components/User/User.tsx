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
      .then((response) => setUser(response.data))
      .then(() => setLoading(false))
    }, [setUser]
  );
 
  return(
    <React.Fragment>
    {loading ? (<p>It's loading...</p>) : (
      <div >
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Company: {user.company.name}</p>
        <p>Website: {user.website}</p>
        <p>Address:</p>
          <p>+ street: {user.address.street}</p>
          <p>+ suite: {user.address.suite}</p>
          <p>+ city: {user.address.city}</p>
          <p>+ zipcode: {user.address.zipcode}</p>
        <a href="/">Return</a>
    </div>
    )}
    </React.Fragment>
  )
}

export default User;