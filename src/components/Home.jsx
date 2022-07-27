import { useState, useEffect } from 'react';
import CardSkeleton from './CardSkeleton';
import UserCard from './UserCard';

const Home = () => {

   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(users=>{
            setUsers(users);
            setLoading(false);
        })
   }, [])
    
  return (
    <>
        <h1 className='container'>Users</h1>
        <div className='container box'>
            {loading && <CardSkeleton cards={8} /> }
            {
                users.map(user=>(
                    <UserCard user={user} key={user.id}/>
                ))
            }
        </div>
    </>
  )
}

export default Home;