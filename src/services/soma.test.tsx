import { soma, multiplica } from "./soma"

describe('soma' ,() =>{
    it('Deve somar 1 ao numero informado', () => {
        const value = soma(4)
        expect(value).toBe(5)
    })
    it('Deve multiplica o numero por 2' , () =>{
        const value = multiplica(2, 2)
        expect(value).toBe(4)
    }) 
    it('Deve multiplicar por 3', () => {
        const value = multiplica(2 , 3) 
        expect(value).toBe(6)
    })
})