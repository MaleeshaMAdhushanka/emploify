// Main Dashboard

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  Briefcase, CalendarOff, UserCheck, Users } from "lucide-react";

export default function DashboardPage() {
   
    const stats = [
        {
            title: "Total Employees",
            value: "156",
            change: "+12 this month",
            icon: Users,
            color: "text-blue-600",
            bg: "bg-blue-100",

        },
        {
            
            title: "Present Today",
            value: "142",
            change: "91% attendance",
            icon: UserCheck,
            color: "text-green-600",
            bg: "bg-green-100",

        },
        {
            title: "On Leave",
            value: "8",
            change: "3 pending approval",
            icon: CalendarOff,
            color: "text-orange-600",
            bg: "bg-orange-100",

        },
        {
            title: "Open Positions",
            value: "5",
            change: "12 applications",
            icon: Briefcase,
            color: "text-purple-600",
            bg: "bg-purple-100",

        },

    ];

    return (
        <div className="space-y-6">
            {/* Page header */}
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome back! Here&apos;s an overview of your HR metrics.
                </p>

            </div>
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {stat.title}
                            </CardTitle>  
                            <div className={`rounded-full p-2 ${stat.bg}`}>
                                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                                
                            </div>  
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">{stat.change}</p>
                        </CardContent>

                    </Card>

                ))}
            </div>

            {/* Placeholder Sections */}
            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Activity feed coming soon...</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Events calendar coming soon...</p>
                    </CardContent>
                </Card>

            </div>

        </div>

    );


}