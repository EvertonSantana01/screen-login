import { Box, Center, Input } from "@chakra-ui/react";
import { Inicial } from "../components/Inicial";
import { Dbutton } from "../components/Dbutton";
import { login } from "../services/login";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () =>{
    const [ email, setEmail] = useState<string>(" ")
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await login(email)

        if(!loggedIn){
           return alert("Email invalido")
        }

        setIsLoggedIn(true)
        changeLocalStorage({login: true})
        navigate("/conta/1")
    }
    
    return(
        <Box>
            <Inicial>
                <Center>
                    <h1>Faça login</h1>
                </Center>
                <Input placeholder='Email' type="Email" id="Nome" value={email} onChange={(event) => setEmail(event.target.value)}/>
                <Input placeholder='Password' type="password"/>
                <Center>
                    <Dbutton onClick={() => validateUser(email)}/>
                </Center>
            </Inicial>
        </Box>
    )
}
export default Home;