import { login } from "./login"

const mockSetIsLoggedIn = jest.fn()
const mockUseNavigate = jest.fn()



describe('login', () =>{

    const mockAlert = jest.fn()
    window.alert = mockAlert 
    const mockEmail = 'Evertonn9797@gmail.com'

    it("Deve exibir um alert com boas vindas caso o email seja valido" , async () => {
        const response = await login(mockEmail)
        expect(response).toBeTruthy() //Vai ter a verificacao de vdd 
    })
        

    it("Deve exibir um erro caso o email seja invalido" , async() =>{
        const response = await login("email.ivalido@gmail")
        expect(response).toBeFalsy() //Vai ter a verificacao de false
    })
})



// DESESTRUTURAÇÃO

// jest.mock('react', () => ({
//     ...jest.requireActual("react"),
//     useContext: () => ({
//         setIsLoggedIn: mockSetIsLoggedIn
//     })
// }))

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual("react-router-dom") as any,
//     useNavigate: () => mockUseNavigate
// }))