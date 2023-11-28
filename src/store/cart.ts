import {atom} from 'jotai'

const cartStore = atom<string[] | undefined>(['']);

const merge = ( currentCart:string[]|undefined, item:string)=>{
    if(currentCart===undefined )return;
    const updatedCart = [...currentCart];
    if(typeof item !== 'string' && item === ''){
        return currentCart;
    }
    
    if(item){
        updatedCart.push(item)
        return updatedCart;
    }
}

export const readOnlyCart= atom((get) => get(cartStore));


export const writeOnlyAtom = atom(
  null,
  (get, set, update) => {
    set(cartStore, merge(get(cartStore), update as string))
    
  },
)