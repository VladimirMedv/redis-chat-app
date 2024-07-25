import { create } from "zustand";

type Preferences = {
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
};

export const usePreferences = create<Preferences>((set) => ({
  soundEnabled: true,
  setSoundEnabled: (enabled: boolean) => set({ soundEnabled: enabled }),
}));
