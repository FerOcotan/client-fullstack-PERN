import { safeParse , number, parse, string, transform, pipe} from "valibot";
import { DraftProductSchema,ProductSchema, Product, ProductsSchema} from "../types"
import axios from "axios"




type ProductData = {
    [k: string]: FormDataEntryValue;
}


export async function addProduct(data: ProductData) {

    try {

        const result = safeParse(DraftProductSchema,{
            name:data.name,
            price:+data.price

        })
        if(result.success) {
           const url = `${import.meta.env.VITE_API_URL}/api/products`
             await axios.post(url, {
            name: result.output.name,
            price: result.output.price,
           })

        }
        else {
            throw new Error("Error de validación")
        }


    }catch (error) {
        console.log(error)
    }


}

export async function getProducts() {   
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`
        const { data } = await axios.get(url)
        console.log("Productos recibidos desde API:", data)
        const result = safeParse(ProductsSchema, data.data)
        if (result.success) {
            return result.output
        }
        throw new Error("Error de validación")
    }
    catch (error) {
        console.log(error)
        return [] // Evita que el componente reviente con `undefined`
    }
}

export async function getProductById(id: Product['id']) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        const { data } = await axios.get(url)
        const result = safeParse(ProductSchema, data.data)
        if (result.success) {
            return result.output
        }
        throw new Error("Error de validación")
    }
    catch (error) {
        console.log(error)
    }
}


export async function updateProduct(data: ProductData, id: Product['id']) {
 
    try {
        //Este es el schema ya listo
        const NumberSchema = pipe(string(), transform(Number), number());
        const result = safeParse(ProductSchema, {
            id,
            name: data.name,
            price: parse(NumberSchema, data.price),
            availability: data.availability
        })
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
            await axios.put(url, {
                id: result.output.id,
                name: result.output.name,
                price: result.output.price,
                availability: result.output.availability
            })
        } else {
            throw new Error("Error de validación")
        }
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export async function deleteProduct(id: Product['id']) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        await axios.delete(url)
    } catch (error) {
        console.log(error)
    }
}