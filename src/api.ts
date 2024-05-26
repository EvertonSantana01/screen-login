
const conta = {
    email: 'Evertonn9797@gmail.com',
    password: '1234567',
    name: 'Everton',
    balance: 2000.00 , 
    id: '1'
}
export const api = new Promise((resolve) => {
    setTimeout(() =>{
        resolve(conta)
    }, 3000)
})