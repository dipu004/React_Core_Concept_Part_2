import { use } from "react"


export default function Users({fetchUsers}){
    const Users = use(fetchUsers)
      console.log(Users);
    return(
        <div className="card">
            <h3>Users:{Users.length} </h3>
        </div>
    )
}