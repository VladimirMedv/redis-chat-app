import { create } from "zustand";

type Preferences = {
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
};

export const usePreferences = create((set) => ({
  soundEnabled: true,
  setSoundEnabled: (enabled: boolean) => set({ soundEnabled: enabled }),
}));
