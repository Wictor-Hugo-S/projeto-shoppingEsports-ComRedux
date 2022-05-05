 const handleAdicionar=(cart,product)=>{
     return{
         type:'ADD_TO_CART',
         cart,
         product
     }
 }

 const handleAdicionarItem=(cart,product)=>{
    return{
            type:'ADD_TO_ITEM',
            cart,
            product
    }
 }

 const handleRemoverItem=(cart,product)=>{
     return{
     type:'REMOVE_TO_ITEM',
     cart,
     product
     }

 }
 const handleDeletarItem=(cart,product)=>{
     return{
         type:'DELETAR_TO_ITEM',
         cart,
         product
     }
         
}
const ChangeCart=(localCart)=>{
    return{
        type:'CHANGE_TO_CART',
        localCart
    }

}


 export default {
     handleAdicionar,
     handleAdicionarItem,
     handleRemoverItem,
     handleDeletarItem,
     ChangeCart
 }