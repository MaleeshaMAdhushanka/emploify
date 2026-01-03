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
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;

    //Actions
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
          user,
          isAuthenticated: !!user,
          isLoading: false,
        }),

      setLoading: (isLoading) => set({ isLoading }),

      setError: (error) => set({ error, isLoading: false }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        }),

      clearError: () => set({ error: null }),
    }),
    {
      name: "auth-storage", // localStorage key
      partialize: (state) => ({ user: state.user }), // Only persist user
    }
  )
);