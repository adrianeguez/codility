

type AddProductToBasketPayload = {
  id: string,
  name: string,
  price: number
}

type RemoveProductToBasketPayload = {
  productId: string,
}

type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};


type StoreState = {
  products: Product[]
}

export function basketReducer(state:StoreState, action) {
  switch(action.type){
    case "ADD_PRODUCT_TO_BASKET": {
      return handleAddProduct(action.payload, state);
    }
    case "REMOVE_PRODUCT_FROM_BASKET": {
      return handleRemoveProduct(action.payload, state);
    }

    default: {
      return {
        products:[]
      };
    }
  }

}
function handleAddProduct(
  payload: AddProductToBasketPayload,
  state: StoreState
){
  const id = payload.id;
  const alreadyExists = state.products.findIndex((a)=> a.id === id)
  if(alreadyExists !== -1){
    const newState = JSON.parse(JSON.stringify({...state}))
    newState.products = [...newState.products]
    const product = newState.products[alreadyExists]
    product.quantity = +product.quantity + 1;
    newState.products[alreadyExists] = product
    return {...newState}
  }else{
    const id = payload.id;
    const name = payload.name;
    const price = +payload.price;
    const quantity = 1;
    const newState = JSON.parse(JSON.stringify({...state}))
    newState.products.push({
      id,
      name,
      price,
      quantity
    })
    return {...newState}
  }
}

function handleRemoveProduct(
  payload: RemoveProductToBasketPayload,
  state: StoreState
){
  const id = payload.productId;
  const alreadyExists = state.products.findIndex((a)=>a.id === id)
  if(alreadyExists !== -1){
    const newState = JSON.parse(JSON.stringify({...state}))
    newState.products = [...newState.products]
    const product = newState.products[alreadyExists]
    product.quantity = product.quantity - 1;
    if(product.quantity === 0){
      newState.products.splice(alreadyExists,1)
      return {...newState}
    }else{
      newState.products[alreadyExists] = product
      return {...newState}
    }
  } else{
    return {...state}
  }
}







