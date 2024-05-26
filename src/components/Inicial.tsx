/* eslint-disable no-mixed-operators */
import { Box } from "@chakra-ui/react"
import "./style/inicial.css"
import "./style/header.css"


export const Inicial = ({ children }: any) =>{

 
    return (
            <Box className="box01">
                <Box className="box02">
                {/* { userData === null || userData === undefined ?
                <Spinner><h2>Login</h2> </Spinner> :
                <h2>Informacoes carregadas</h2>
                }  */}
               {children}

                </Box>
                
            </Box>
    )
}