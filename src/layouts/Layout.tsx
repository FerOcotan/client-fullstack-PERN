import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className='bg-lime-700 text-white shadow-lg'>
        <div className='mx-auto max-w-7xl flex justify-between items-center p-4'>
          <div className='flex items-center gap-4'>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" 
              alt="Logo" 
              className='w-10 h-10 object-contain'
            />
            <h1 className='text-2xl font-bold tracking-tight'>Administrador de Productos</h1>
          </div>
        </div>
      </header>

      <main className='py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='bg-white rounded-xl shadow-md p-6 sm:p-8'>
          <Outlet />
        </div>
      </main>

      <footer className='mt-12 py-6 border-t border-gray-200 bg-white'>
        <div className='max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm'>
          © {new Date().getFullYear()} Administrador de Productos - Todos los derechos reservados
        </div>
      </footer>
    </div>
  )
}