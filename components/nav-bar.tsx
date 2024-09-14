import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Button, Link } from '@radix-ui/themes';
import { createClient } from '@/utils/supabase/server';


const NavBar = async () => {
    // Retrieve a user
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()


    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <NavigationMenu.Root className="relative">
                    <NavigationMenu.List className="flex space-x-4">
                        <NavigationMenu.Link className="NavigationMenuLink" href="/">
                            Home
                        </NavigationMenu.Link>
                    </NavigationMenu.List>

                    {/* Optional: Navigation Menu Indicator */}
                    <NavigationMenu.Indicator className="h-2 bg-blue-500 absolute left-0 bottom-0 transition-transform" />
                </NavigationMenu.Root>


                {user ? (
                    <Link href="logout">
                        <Button
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                        >
                            Sign Out
                        </Button>
                    </Link>
                ) : (
                    <Link href="/login">
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                            Login
                        </Button>
                    </Link>
                )}
            </div >
        </nav >
    )
}

export default NavBar
