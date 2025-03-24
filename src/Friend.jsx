    
export default   
function Friend({friend}){
    console.log(friend)
    const {name , email,phone,website} = friend;
    return(
        <div className="card">
            <h4>Name:{name} </h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    )
}