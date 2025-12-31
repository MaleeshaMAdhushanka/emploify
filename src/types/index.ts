//Re-export Prisma types for easy access

export type {
    User,
    Department,
    Position,
    Employee,
    Attendance,
    Leave,
    Payroll,
    JobPosting,
    Application,
} from "../generated/prisma/client"


//Re-export enums
export {
 UserRole,
 Gender,
 EmployeeType,
 EmployeeStatus,
 AttendanceStatus,
 LeaveType,
 LeaveStatus,
 PayrollStatus,
 JobStatus,
 ApplicationStatus,   
 
} from "../generated/prisma/client"

//This data doesn't come directly from database
//Its calculated//aggregated for the dashboard
//Dashboard status Type
export interface DashboardStats{
    totalEmployees: number;
    presentToday: number;
    onLeave: number;
    openPositions: number;
}

//Side bar Navigation Type
export interface NavItem {
    title: string;
    href: string;
    icon: string;
    badge?: number;
}