"use client";

import React, { useState } from "react";
import { SideBar , Header} from "@/components/layout";


export default function DashboardLayout ({
    children,
 }:{
    children: React.ReactNode;
 }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);


    return (
        <div className="flex h-screen overflow-hidden">
            <div className="hidden lg:block">
                {/* Sidebar -Desktop */}
                <SideBar/>
            </div>

            {/* Side bar -mobile overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                     className="absolute inset-0 bg-black/50" 
                     onClick={() => setSidebarOpen(false)}
                    
                    />
                    <div className="absolute left-0 top-0 h-full">
                      <SideBar/>
                    </div>

                </div>
                
            )}
            {/* Main content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header onMenuClick={() => setSidebarOpen(true)}/>
                    <main className="flex-1 overflow-y-auto bg-muted/30 p-6">
                        {children}
                    </main>

            </div>


        </div>

    );

 }