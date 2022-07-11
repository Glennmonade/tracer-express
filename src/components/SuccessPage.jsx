import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, ContentContainer } from './styles';
import { FaCheckCircle} from 'react-icons/fa';


const SuccessPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/commuter-profile")
        }, 1000);
    }, []);


  return (
    <div style={{width: "100%", alignItems: "center", paddingTop: "10rem"}}>
        <div style={{justifyContent: "center"}}>
         <h1 style={{textAlign: "center"}}>Success!</h1>
         <h1 style={{textAlign: "center", fontSize: "30px", color: "#E33311"}}><FaCheckCircle/></h1>
         </div>
    </div>
  )
}

export default SuccessPage