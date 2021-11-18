import { products } from "../arrayProducts"

export const bringData = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            if (true){
                resolve(products);
            }
        }, 2000)
    })
}