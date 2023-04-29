
import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {fetchUsers} from "./userSlice.js"

const UserView = () => {
  let allUsers = useSelector((state)=>  state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>   
        <h2>List of Users </h2>
        {allUsers.loading ? <div>Loading ... </div> : null} 
        {!allUsers.loading && allUsers.error? <div>Error : {allUsers.error} </div>: null} 

        {!allUsers.loading && allUsers.users.length? (
          <ul>
            {
              allUsers.users.map((user) => {
                return <li key={user.id}> {user.name}</li>
              })
            }
          </ul>
        ): null} 
    </div>
 
  )
}

export default UserView;