

export const Navbar = () => {
  return (
    <>

      <nav className='bg-black flex h-14 items-center justify-between px-5'>
        <div className="logo font-bold text-xl mx">
          <span className="text-green-500">&lt;</span>
          <span className="text-white">Pass</span>
          <span className="text-green-500">OP</span>
          <span className="text-green-500">/&gt;</span>
        </div>
        <ul>
          <li className='flex w-[200px] justify-between text-white mx-3'>
            <a className='hover:font-bold' href="#">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">contact</a>
          </li>
        </ul>
      </nav>

    </>
  )
}
