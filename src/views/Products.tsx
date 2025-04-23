
import { Link } from "react-router-dom"


export default function Products() {
  return (
    <>
    
    <div className="flex justify-between mb-10">
      <h2 className="text-4xl font-bold text-slate-500">Productos</h2>
      
        <Link to="/productos/nuevo" className="bg-lime-800 text-white px-4 py-3 rounded-md uppercase font-bold text-sm">Nuevo producto</Link>

    </div>
    
    
    </>
  )
}
