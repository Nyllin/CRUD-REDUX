import { Link } from "react-router-dom"
import { removeUser, userList } from "../Redux/Action"
import { connect } from "react-redux"
import { useEffect } from "react"
import { Button } from "react-bootstrap"
import { toast } from "react-toastify"
const UserListing = (props) => {
    useEffect(()=>{
        props.loaduser();
        console.log(props);
    },[])

    const handleRemove = (code)=>{
        if(window.confirm("Are you sure?")){
            props.removeuser(code);
            props.loaduser();
            toast.success('User removed successfully.')
        }

    }

   

  return (
    props.user.loading?<div>Loading</div>:
    props.user.err?<div>{props.user.err}</div>:
   <div>
    <div className="card">
        <div className="card-header" >
            <Link to={'/user/add'} className="btn btn-success">Add User [+]</Link>
        </div>
        <div className="card-body">
            <table className="table table-bordered">
                <thead className="bg-dark text-white">
                    <tr>
                        <td>Code</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Role</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {props.user.userlist&& props.user.userlist.map(item=>
                    
                   <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.role}</td>
                                <td>
                                   <Link to={'edit/'+item.id}><Button variant="primary">Edit</Button></Link>  &nbsp;
                                    <Button onClick={()=>handleRemove(item.id)} variant="danger">Delete</Button>
                                    
                                </td>
                            </tr>)}
                           
                 
                </tbody>

            </table>
        </div>

    </div>
</div>
  )
}

const mapStateToProp = (state)=>{
    return {
        user:state.user
    }
}

const mapDispatchToProp = (dispatch)=>{
    return {
        loaduser : ()=>dispatch(userList()),
        removeuser:(code)=>dispatch(removeUser(code))
    }
}

export default connect(mapStateToProp,mapDispatchToProp) (UserListing)