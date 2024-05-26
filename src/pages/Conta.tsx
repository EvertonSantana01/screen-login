import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AppContext } from "../components/AppContext";


interface UserData {
    email: string,
    password: string,
    name: string,
    balance: number ,
    id: string ,
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)
    console.log("Retorno da pagina conta", isLoggedIn )

    !isLoggedIn && navigate("/")
    
    useEffect(() => {
        const getData = async () =>{
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])

    // Data
    const ectualData = new Date()   

    if( userData && id !== userData.id){
        navigate('/')
    }
    return(
        <Center>
            <SimpleGrid columns={2} spacing={8} padding={16}>
                { 
                    userData === undefined || userData === null ?
                    (
                        <Spinner size='xl' color="white">login</Spinner>
                    ) :
                    ( 
                        <>
                            <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${ectualData.getDay()} / ${ectualData.getMonth()} / ${ectualData.getFullYear()} ${ectualData.getHours()}:${ectualData.getMinutes()}`}/>
                            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`}/>
                        </>
                    )
                }
            </SimpleGrid>
        </Center>
    )
}
export default Conta;