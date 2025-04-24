import { Link, Form, useActionData, ActionFunctionArgs, redirect } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { addProduct } from "../services/ProductService";

export async function action({request} : ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData())
    
    let error =''
    if (Object.values(data).includes('')) {
        error = 'Todos los campos son obligatorios'
    }
    if (Number(data.price) < 0) {
        error = 'El precio no puede ser negativo'
    }
    if (error.length) {    
        return error
    }

    await addProduct(data)
    return redirect('/')
}

export default function NewProduct() {
    const error = useActionData() as string

    return (
        <div className="min-h-screen py-10 px-4">
            <div className="flex justify-between items-center mb-8 max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-gray-800">Nuevo Producto</h2>
                <Link
                    to="/"
                    className="bg-lime-800 text-white px-4 py-2 rounded-xl hover:bg-gray-700 transition-colors"
                >
                    Volver
                </Link>
            </div>

            {error && (
                <div className="max-w-md mx-auto mb-6">
                    <ErrorMessage>{error}</ErrorMessage>
                </div>
            )}

            <Form 
                className="max-w-md mx-auto"
                method="POST"
            >
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    {/* Imagen decorativa */}
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
                            alt="Producto"
                            className="w-24 h-24 object-contain"
                        />
                    </div>

                    <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Registrar Nuevo Producto</h2>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-medium mb-2"
                            htmlFor="name"
                        >
                            Nombre Producto:
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="block w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
                            placeholder="Nombre del Producto"
                            name="name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-medium mb-2"
                            htmlFor="price"
                        >
                            Precio:
                        </label>
                        <input
                            id="price"
                            type="number"
                            className="block w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
                            placeholder="Precio Producto. ej. 200, 300"
                            name="price"
                            min="0"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-yellow-600 text-white py-3 rounded-xl hover:bg-yellow-700 transition-colors duration-300 font-medium"
                    >
                        Registrar Producto
                    </button>
                </div>
            </Form>
        </div>
    );
}