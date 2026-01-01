"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Briefcase, Building2, CalendarCheck, CalendarDays, DollarSign, LayoutDashboard, LogOut, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea} from "@/components/ui/scroll-area";

const navItems = [
   {title: "Dashboard", href: "/dashboard", icon: LayoutDashboard},
   {title: "Employees", href: "/dashboard/employees", icon: Users},
   {title: "Attendance", href: "/dashboard/attendance", icon: CalendarCheck},
   {title: "Leaves", href: "/dashboard/leaves", icon: CalendarDays},
   {title: "Payroll", href: "/dashboard/payroll", icon: DollarSign},
   {title: "Recruitment", href: "/dashboard/recruitment", icon: Briefcase},
   {title: "Departments", href: "/dashboard/departments", icon: Building2},
   {title: "Settings", href: "/dashboard/settings", icon: Settings},

   

];

export function SideBar(){
    const pathname = usePathname();
    return (
        <div className="flex h-screen w-64 flex-col border-r bg-background">
            {/* Logo */}
            <div className="flex h-16 items-center border-b px-6">
                <Link href="/dashboard" className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                    <span className="text-lg font-bold text-primary-foreground">E</span>
                  </div>
                  <span className="text-xl font-bold text-primary-foreground">Emploify</span>
                
                </Link>

            </div>

            {/* Navigation */}
            <ScrollArea className="flex-1 px-3 py-4">
                <nav className="space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href ||
                         (item.href !== '/dashboard' && pathname.startsWith(item.href));

                         return (
                            <Link key={item.href} href={item.href}>
                              <Button
                                variant={isActive ? "secondary" : "ghost"}
                                 className={cn(
                                    "w-full justify-start gap-3",
                                    isActive && "bg-secondary font-medium"

                                 )}
                            
                              >
                                <item.icon className="h-5 w-5" />
                                {item.title}

                              </Button>
                            
                            </Link>

                         );
                    })}

    
                </nav>

            </ScrollArea>

            {/* Logout */}
            <div className="border-t p-3">
                <Button variant="ghost" className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50">
                    <LogOut className="h-5 w-5" />
                    Logout

                </Button>

            </div>




        </div>

    );

}
