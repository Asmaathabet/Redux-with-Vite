
import { useSelector } from "react-redux"

const UserView = () => {
  let allUsers = useSelector((state)=>  state.user.users)

  return (
    <div>   
        <h2>List of Users - {allUsers}</h2>

    </div>
 
  )
}

export default UserView;