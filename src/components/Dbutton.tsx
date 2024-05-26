import { Button } from "@chakra-ui/react"
import { MouseEvent, MouseEventHandler } from "react"


interface IDbutton {
    onClick: MouseEventHandler
}

export const Dbutton = ({ onClick }: IDbutton) => {
    return(
       <Button 
        onClick={onClick}
        marginTop="10px"
        colorScheme='teal' 
        variant='outline'>
        Entrar</Button>
    )
}