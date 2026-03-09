import React from 'react';
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@heroui/navbar";
import { Link } from 'react-router-dom';

function NavbarTs() {
  return (
    <div>
      <Navbar>
      <NavbarContent className="hidden sm:flex gap-20 m-auto text-5xl" justify="center">
        <NavbarItem>
          <Link className='text-xl' to="/">
            Users
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className='text-xl'  to="/posts">
            Posts
          </Link>
        </NavbarItem> 
        <NavbarItem>
          <Link className='text-xl' color="foreground" to="Todos">
            Todos
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </div>
  )
}

export default NavbarTs
