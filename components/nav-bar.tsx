import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Button, Link } from '@radix-ui/themes';


const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <NavigationMenu.Root className="relative">
                    <NavigationMenu.List className="flex space-x-4">
                        <NavigationMenu.Link className="NavigationMenuLink" href="/">
                            Home
                        </NavigationMenu.Link>
                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className="hover:text-gray-300 cursor-pointer">
                                About
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="absolute top-full mt-2 bg-gray-700 p-2 rounded-lg shadow-md">
                                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-600 rounded">
                                    Our Team
                                </a>
                                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-600 rounded">
                                    Our Story
                                </a>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className="hover:text-gray-300 cursor-pointer">
                                Contact
                            </NavigationMenu.Trigger>
                        </NavigationMenu.Item>
                    </NavigationMenu.List>

                    {/* Optional: Navigation Menu Indicator */}
                    <NavigationMenu.Indicator className="h-2 bg-blue-500 absolute left-0 bottom-0 transition-transform" />
                </NavigationMenu.Root>
                <Link href="/login">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        Login
                    </Button>
                </Link>
            </div >
        </nav >
    )
}

export default NavBar
