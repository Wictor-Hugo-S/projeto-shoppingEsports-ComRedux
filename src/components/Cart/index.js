import React, { Fragment } from "react";
import { useSelector,useDispatch } from "react-redux";
import cartActions from '../store/actions/cart'

const Cart=()=>{
    const cart=useSelector(state=>state.cart)
    const dispatch=useDispatch()
    let totalPrice=0

    cart.Cart.forEach(item=>totalPrice+=( item.price * item.quantity ))
    
    if(cart.value>0){
        localStorage.setItem('shoping: cart',JSON.stringify(cart))
    }
    return(
            <Fragment>
                <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#CartModal">
                    <span><i className="fas fa-shopping-cart"></i></span>
                    <span className="badge rounded-pill bg-info text-dark">
                        {cart.value}
                    </span>
                </button>

                 {/* Modal */}
                 <div className="modal fade" id="CartModal" tabIndex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="CartModalLabel">Meu Carrinho</h5>
                                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className="modal-body table-responsive">
                                    <table className="table table-hover">
                                    <thead>
                                        <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Produto</th>
                                        <th scope="col">Qtd</th>
                                        <th scope="col">Preço</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                      {cart.value>0?(
                                          <>
                                        
                                      
                                        {cart.Cart.map((item,index)=>{
                                                return(
                                                    <tr key={index} >

                                                        <th><button onClick={
                                                                ()=>dispatch(cartActions.handleDeletarItem(cart,item))
                                                                }
                                                             className="badge bg-danger">
                                                                <i className="fas fa-window-close">
                                                                 </i>
                                                                 </button>
                                                                 </th>
                                                        <th><img className="img-fluid img-thumbnail" src={item.image} alt={item.name} width="50px"/></th>
                                                        <th><span className="badge badge-pill bg-warning">{item.quantity}</span></th>
                                                        <th>R$ {item.price.toFixed(2)}</th>
                                                        <th><button onClick={
                                                            ()=>dispatch(cartActions.handleAdicionarItem(cart,item))
                                                            } 
                                                            className="badge badge-pill bg-primary">
                                                                <i className="fas fa-plus"></i>
                                                                </button>
                                                                </th>
                                                        <th><button onClick={
                                                            ()=>dispatch(cartActions.handleRemoverItem(cart,item))
                                                        }

                                                        className="badge badge-pill bg-danger">
                                                            <i className="fas fa-minus">
                                                                </i>
                                                                </button>
                                                                </th>

                                                        <th>R$ {(item.price * item.quantity).toFixed(2)}</th>

                                                    </tr>
                                                    
                                                )
                                            })}

                                            </>

                                            )
                                            :
                                            <h6  style={{textAlign:'center',whiteSpace:'nowrap',fontWeight:'bold'}}>O carrinho está vazio !!!!!</h6>
                                            }
                                       
                                        <tr>
                                        <th colSpan="2" scope="col">Total</th>
                                        <th colSpan="3">{cart.value}</th>
                                        <th colSpan="2">R$ {totalPrice.toFixed(2)}</th>
                                        </tr>
                                    </tbody>
                                    </table>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                            </div>
                        </div>
                    </div>
            </Fragment>
         )
}

export default Cart