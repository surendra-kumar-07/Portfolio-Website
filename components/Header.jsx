"use client"
import React, { useEffect, useState } from 'react'
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "@/components/icons/MoonIcon";
import {SunIcon} from "@/components/icons/SunIcon";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button,NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import {useTheme} from "next-themes";
import {Avatar} from "@nextui-org/react";

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const menuItems = [
    "Home",
    "Contact",
    "Skills",
    "Network"
  ];
  const textColor = 'text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] to-blue-500'

  if (!mounted) {
    return null
  }
  return (
   <header>
    <div>
      
      <Navbar isBordered>
      <NavbarContent className="pr-2" justify="start">
        <NavbarBrand>
        <Avatar isBordered color="primary" src="https://avatars.githubusercontent.com/u/146053122?v=4" size='sm'/>
         <span className={`text-xl ml-2 font-bold ${textColor}`}>{'Surendra kumar'}</span>
        </NavbarBrand>
      </NavbarContent>
      
    


      <NavbarContent className="hidden sm:flex" justify="end">
        {menuItems.map((item, index)=>(
           <NavbarItem key={`${item}-${index}`}>
           <Link href="#"  color={
                index === 2 ? "warning" :"foreground"
              } className='font-semibold'>
            {item}
           </Link>
         </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify='end'>
      <Switch
      defaultSelected={theme == 'light' ? false : true}
      onValueChange={()=>theme == 'dark' ? setTheme('light'):setTheme('dark')}
      size="sm"
      color={'#7e22ce'}
      thumbIcon={({ isSelected, className }) =>
      isSelected ? (
        <MoonIcon className={className} />
        ) : (
        <SunIcon className={className} />
      )
    }
    ></Switch>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
      <NavbarMenuToggle />
      </NavbarContent>


      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full font-semibold"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </div>
   </header>
  )
}
