import { Product } from "../types"

type ProductFormProps = {
    product?: Product
}

export default function ProductForm({ product }: ProductFormProps) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md mx-auto">
            {/* Imagen decorativa */}
            <div className="flex justify-center mb-6">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
                    alt="Producto"
                    className="w-24 h-24 object-contain"
                />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Editar Producto</h2>

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
                    defaultValue={product?.name}
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
                    defaultValue={product?.price}
                />
            </div>

            <button
                type="submit"
                className="w-full mt-4 bg-yellow-600 text-white py-3 rounded-xl hover:bg-lime-700 transition-colors duration-300"
            >
                Guardar Producto
            </button>
        </div>
    )
}
