
export const listaClientes = () => {  
    return fetch(`Http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
    })  
} 
export const clienteService = {
    listaClientes

}