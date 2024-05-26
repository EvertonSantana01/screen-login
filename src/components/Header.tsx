import { Box, Button, Center, Flex, Spacer } from "@chakra-ui/react"
import "./style/header.css"
import { useContext } from "react"
import { AppContext } from "../components/AppContext"
import { useNavigate } from "react-router-dom"
import { changeLocalStorage } from "../services/storage"

export const Header = () =>{
    const { isLoggedIn ,setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () => {
        changeLocalStorage({ login: false })
        setIsLoggedIn(false)
        navigate('/')
    }

    return(
        <Flex className="header">
            <Box >
            <Center>
                <h1 className="h1">Banco Central</h1>
            </Center> 
            </Box>
            
            {
                isLoggedIn && (
                    <>
                        <Spacer/>
                        <Button onClick={logout}>
                            Sair
                        </Button>
                    </>
                )
            }

        </Flex>
        
    )
}