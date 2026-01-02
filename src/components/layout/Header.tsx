"use client";

import { Bell, Menu, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


interface HeaderProps {
    onMenuClick: () => void;
}


export function Header({onMenuClick}: HeaderProps){
    return (
        <header className="flex h-16 items-center justify-between border-b bg-background px-6">
            {/* Left side */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
                    <Menu className="h-5 w-5"/>
                </Button>




            {/* Search */}

            <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>
                <Input
                  placeholder="Search employees, departments..."
                  className="w-80 pl-9"
                
                />

            </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5"/>
                <span  className="absolute -right-1 -top-1 flex h-5 w05 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    3
                </span>


            </Button>
            {/* User Menu */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/avatar.png" alt="User"/>
                            <AvatarFallback>AD</AvatarFallback>

                        </Avatar>
                        <div className="hidden text-left md:block">
                            <p className="text-sm font-medium">Admin User</p>
                            <p className="text-xs text-muted-foreground" >admin@emplofy.com</p>

                        </div>

                    </Button>

                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="text-red-500">Logout</DropdownMenuItem>

                </DropdownMenuContent>

            </DropdownMenu>


        </div>
 
     </header>

    );

}