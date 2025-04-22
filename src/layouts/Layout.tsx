import {Outlet } from 'react-router-dom'

export default function Layout() {
  return (
  <>

    <header className='bg-slate-800 text-white p-3'>
      <div className='mx-auto max-w-7xl flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Administrador de productos</h1>



      </div>
    </header>


    <main className='mt-10 p-10 max-w-7xl mx-auto bg-white rounded-lg shadow'>


      <Outlet/>
    </main>
  </>
  )
}
