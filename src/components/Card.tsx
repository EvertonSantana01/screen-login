interface Icard{
    id: number,
    paragraph: string,
    details: string
}

export const Card = ({id, paragraph, details}: Icard) =>{
    console.log(id)
    return(
        <div>
            <h1>Card {id}</h1>
            <p>{paragraph}</p>
            <p>{details}</p>
        </div>
    )
}