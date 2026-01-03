import { create } from "zustand";

interface Employee {
    id: string;
    employeeId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
    departmentId: string;
    positionId: string;
    status: "ACTIVE"| "ON_LEAVE" | "TERMINATED" | "SUSPENDED";
    avatarUrl: string | null;

}

interface Filters {
    search: string;
    department: string ;
    status: string;
}

interface EmployeeState {
    //State
    employees: Employee[];
    selectedEmployee: Employee | null;
    filters: Filters;
    isLoading: boolean;
    error: string | null;


    //Pagination
    currentPage: number;
    totalPages: number;
    totalCount: number;


    //Actions
    setEmployees: (employees: Employee[]) => void;
    addEmployee: (employee: Employee) => void;
    updateEmployee: (id: string, data: Partial<Employee>) => void;
    deleteEmployee: (id: string) => void;
    setSelectedEmployee: (employee: Employee | null) => void;
    setFilters: (filters: Partial<Filters>) => void;
    resetFilters: () => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setPagination: (page: number, totalPages: number, totalCount: number) => void;

}

const initialFilters: Filters = {
    search: "",
    department: "",
    status: "",
};


export const  useEmployeeStore = create<EmployeeState>((set) => ({
        //Initial State
        employees: [],
        selectedEmployee: null,
        filters: initialFilters,
        isLoading: false,
        error: null,
        currentPage: 1,
        totalPages: 1,
        totalCount: 0,

        //Actions
        setEmployees: (employees) => set({ employees, isLoading: false }),

  addEmployee: (employee) =>
    set((state) => ({
      employees: [employee, ...state.employees],
      totalCount: state.totalCount + 1,
    })),

  updateEmployee: (id, data) =>
    set((state) => ({
      employees: state.employees.map((emp) =>
        emp.id === id ? { ...emp, ...data } : emp
      ),
      selectedEmployee:
        state.selectedEmployee?.id === id
          ? { ...state.selectedEmployee, ...data }
          : state.selectedEmployee,
    })),
    deleteEmployee: (id) =>
    set((state) => ({
      employees: state.employees.filter((emp) => emp.id !== id),
      totalCount: state.totalCount - 1,
      selectedEmployee:
        state.selectedEmployee?.id === id ? null : state.selectedEmployee,
    })),

  setSelectedEmployee: (selectedEmployee) => set({ selectedEmployee }),

       setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
      currentPage: 1, // Reset to first page on filter change
    })),

  resetFilters: () => set({ filters: initialFilters, currentPage: 1 }),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (error) => set({ error, isLoading: false }),

  setPagination: (currentPage, totalPages, totalCount) =>
    set({ currentPage, totalPages, totalCount }),
}));
           