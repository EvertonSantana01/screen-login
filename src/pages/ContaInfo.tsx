import { Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Importe o Link do react-router-dom

const ContaInfo = () => {
    return(
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>
            {/* Use o componente Link do react-router-dom e a propriedade "to" */}
            <Link as={RouterLink} to='/conta/1'>
                <Text>
                    Conta
                </Text>
            </Link>
        </>
    )
}
export default ContaInfo;
