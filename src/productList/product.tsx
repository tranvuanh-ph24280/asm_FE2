import { AddProduct, fetchProduct, removeProduct, updateProduct } from "@/actions/product";
import { useAppDispatch, useAppSelector } from "@/store/hook"
import { Dispatch, useEffect } from "react"


const ProductList = () => {
    const dispatch : Dispatch<any> = useAppDispatch();
    const {products} = useAppSelector((state:any)=>state.product)
    useEffect(()=>{
        dispatch(fetchProduct())
    },[dispatch])
    return <div>
        
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Tên sản phẩm
                </th>
                <th scope="col" className="px-6 py-3">
                    Hành động
                </th>
            </tr>
        </thead>
        <tbody>
            {products.map((item:any)=>(
                <tr key={item.key} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.name}
                </th>
                <td className="px-6 py-4">
                    <button onClick={()=>dispatch(updateProduct({name:"ngu",id: 1}))} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                    <button onClick={()=>dispatch(removeProduct(item.id))} className="font-medium pl-3 text-red-600 dark:text-blue-500 hover:underline">Delete</button>
                    <button onClick={()=>dispatch(AddProduct({name:"add"}))} className="font-medium pl-3 text-orange-800 dark:text-greed-500 hover:underline">Add</button>
                </td>
            </tr>
            ))}
            
            
        </tbody>
    </table>
</div>

    </div>
}
export default ProductList