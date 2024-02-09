import Navbar from "./Navbar"

function Layout(props) {
  return (
    <div className='min-h-screen bg-white dark:bg-black font-sans antialiased'>
      <Navbar/>
      {props.children}
    </div>
  )
}

export default Layout
