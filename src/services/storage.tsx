interface IBanco{
    login: boolean
}

const bancoCentral = {
    login: false
}


export const getAllLocalStorage = () => {
    return localStorage.getItem('bancoCentral')
}

export const creatLocalStorage = (): void => {
    localStorage.setItem("bancoCentral" , JSON.stringify(bancoCentral))
}

export const changeLocalStorage = (bancoCentral: IBanco): void => {
    localStorage.setItem("bancoCentral", JSON.stringify(bancoCentral))
}