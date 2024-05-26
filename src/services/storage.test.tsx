import { changeLocalStorage, creatLocalStorage, getAllLocalStorage } from "./storage"

const bancoCentral = {
    login: false
} ;

describe('Storage', () => {    

    const mockSetItem = jest.spyOn(Storage.prototype , 'setItem') 

    it("Deve retorna o objeto no localStorage com a chave bancoCentral", () =>{
        const mockGetItem = jest.spyOn(Storage.prototype , 'getItem') 
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith("bancoCentral")
    })

    it("Deve criar um objeto Localstorage", () => {
        creatLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith("BancoCentral", JSON.stringify(bancoCentral))
    })

    it("Deve alterar o valor do objeto no localStorage", () => {
        changeLocalStorage(bancoCentral)
        expect(mockSetItem).toHaveBeenCalledWith("bancoCentral" , JSON.stringify(bancoCentral))
    })
})