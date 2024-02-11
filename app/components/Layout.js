import { Navbar } from "./Navbar"

export default function Layout(props) {
  return (
    <div className='min-h-screen bg-white dark:bg-black font-sans antialiased'>
      <Navbar session={props.session}/>
      {props.children}
    </div>
  )
}

