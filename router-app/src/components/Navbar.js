import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    // const navLinkStyles = ({isActive}) =>{
    //     return{
    //         fontweight: isActive ? 'bold':'lightweight',
    //         textDecoration: isActive ? 'underline' : 'none'
    // }

    // }
  return (
    <nav>
        <NavLink  to='/'>Home</NavLink>
        <NavLink  to = '/about'>About</NavLink>
        <NavLink  to = '/product'>Product</NavLink>
    </nav>
  )
}
