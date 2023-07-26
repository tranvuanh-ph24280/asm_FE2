import { IProduct } from "@/interface/product"
import axios from "axios"

export const fetchProduct = () => async (dispatch:any) => {
    try {
        const {data} = await axios.get("http://localhost:3000/products")
        dispatch({type: "getAll", payload:data})
    } catch (error) {
        
    }
}
export const AddProduct = (product:IProduct) => async (dispatch:any) => {
    try {
        const {data} = await axios.post("http://localhost:3000/products",product)
        dispatch({type: "POST", payload:data})
    } catch (error) {
        
    }
}
export const updateProduct = (product:IProduct) => async (dispatch:any) => {
    try {
        const {data} = await axios.put(`http://localhost:3000/products/${product.id}`,product)
        dispatch({type: "PUT", payload:data})
    } catch (error) {
        
    }
}
export const removeProduct = (id:number) => async (dispatch:any) => {
    try {
        await axios.delete(`http://localhost:3000/products/${id}`)
        dispatch({type: "DELETE"})
    } catch (error) {
        
    }
}

