
const listaClientes = () => {  
    return fetch(`Http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
    })  
} 
const criaCliente = (nome, email) => {
    return fetch(`Http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify ({
            nome: nome,
            email: email
        })
       })
       .then( resposta => {
        return resposta.body
       })
    
}


export const clienteService = {
    listaClientes,
    criaCliente

}