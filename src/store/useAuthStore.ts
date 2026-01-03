import { create } from "zustand";
import { persist } from "zustand/middleware";


//Types
interface User {
    id: string;
    name: string;
    email: string;
    avatar_url?: string;
    role: "ADMIN" | "HR_MANAGER" | "MANAGER" | "EMPLOYEE";
}

interface AuthState {
    //State
    user: User | null; //Current Logged-in User (or null)
    isAuthenticated: boolean; //Is user logged in?
    isLoading: boolean; //Is  Auth check  in progress?
    error: string | null; //Any error message

    //Actions(Functions to change state)
    setUser: (user: User | null) => void;
    setLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;
    logout: () => void;
    clearError: () => void;
}


export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // Initial State
      user: null,
      isAuthenticated: false,
      isLoading: true,
      error: null,

      // Actions
      setUser: (user) =>
        set({
          user, //Set the user
          isAuthenticated: !!user, //true if user exists, false is null
          isLoading: false, //Done loading
        }),

      setLoading: (isLoading) => set({ isLoading }),

      setError: (error) => set({ error, isLoading: false }),

      logout: () =>
        set({
          user: null, //Clear user
          isAuthenticated: false, //Not authenticated
          isLoading: false, //Not loading
          error: null, //Clear error
        }),

      clearError: () => set({ error: null }),
    }),
    {
      name: "auth-storage", // localStorage key
      partialize: (state) => ({ 
        user: state.user 
     }), // Only persist user
    }
  )
);