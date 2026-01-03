import React from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
    //Side bar
    sidebarOpen: boolean;
    sidebarCollapsed: boolean;

    //Theme
    theme: 'light' | 'dark' | 'system';

    //Modal
    modalOpen: boolean;
    modalContent: React.ReactNode | null;

    //Actions
    toggleSidebar: () => void;
    setSidebarOpen: (open: boolean) => void;
    toggleSidebarCollapse: () => void;
    setTheme: (theme: "light" | "dark" | "system") => void;
    openModal: (content: React.ReactNode) => void;
    closeModal: () => void;
}
    



export const useUIStore = create<UIState>()(
    persist(
        (set) => ({
            //Initial State
            sidebarOpen: false,
            sidebarCollapsed: false,
            theme: "light",
            modalOpen: false,
            modalContent: null,

            //Actions
            toggleSidebar: () =>
                set((state) => ({ sidebarOpen: !state.sidebarOpen})),

            setSidebarOpen: (sidebarOpen) => set({ sidebarOpen}),
            
            toggleSidebarCollapse: () =>
            set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),

            setTheme: (theme) => set({ theme }),

            openModal: (modalContent) => set({ modalOpen: true, modalContent }),

            closeModal: () => set({ modalOpen: false, modalContent: null }),

        }),
        {
            name: "ui-storage",
            partialize: (state) => ({
                theme: state.theme,
                sidebarCollapsed: state.sidebarCollapsed,

            }),
        }

    )

);