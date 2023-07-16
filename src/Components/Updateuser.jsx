import { useEffect, useState } from "react";
import { FormControl, FormLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchUserObj, funcUpdateUser } from "../Redux/Action";

const Updateuser = () => {
  const [id,setId] = useState(0);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [role,setRole] = useState(2);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {code} = useParams();
  const userObj = useSelector(state=>state.user.userObj)
  const handleUpdate = (e)=>{
    e.preventDefault();
    const obj = {name,email,phone,role};
    dispatch(funcUpdateUser(obj,id));
    navigate('/user')
  }

  useEffect(()=>{
    dispatch(fetchUserObj(code))
  },[])

  useEffect(()=>{
    if(userObj){
      setId(userObj.id);
           setName(userObj.name);
            setEmail(userObj.email);
            setPhone(userObj.phone);
          setRole(userObj.role);
    }

  },[userObj])
  return (
    <div>
      <h2 className="text-center">ADD USER</h2>
      <Form onSubmit={handleUpdate}>
      <Form.Group className="mb-3 m-auto col-lg-6">
          <FormLabel>ID</FormLabel>
          <FormControl disabled value={id} onChange={(e)=>setId(e.target.value)} name="id" type="text" />
        </Form.Group>
        <Form.Group className="mb-3 m-auto col-lg-6">
          <FormLabel>Name</FormLabel>
          <FormControl value={name} onChange={(e)=>setName(e.target.value)} name="name" type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3 m-auto col-lg-6">
          <FormLabel>Email</FormLabel>
          <FormControl
          value={email} onChange={(e)=>setEmail(e.target.value)}
            name="email"
            type="text"
            placeholder="Enter Your Email"
          />
        </Form.Group>
        <Form.Group className="mb-3 m-auto col-lg-6">
          <FormLabel>Phone</FormLabel>
          <FormControl
          value={phone} onChange={(e)=>setPhone(e.target.value)}
            name="phone"
            type="number"
            placeholder="Enter Your Phone"
          />
        </Form.Group>
        <Form.Group className="mb-3 m-auto col-lg-6">
        <Form.Select value={role} onChange={(e)=>setRole(e.target.value)} aria-label="Default select example">
          <option>Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          
        </Form.Select>
        </Form.Group>
        <div
        className="m-auto col-lg-2">  
        <Button type="submit" variant="success" className="text-center">Submit</Button> &nbsp;
        <Link to="/user" className="btn btn-danger">Back</Link></div>
      </Form>
    </div>
  )
}

export default Updateuser