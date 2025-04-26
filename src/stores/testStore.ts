import { create } from "zustand";
import ColorVariation from "@/constants/color-variation";
import SizeVariation from "@/constants/size-variation";

interface TestState {
  color: (typeof ColorVariation)[number];
  size: (typeof SizeVariation)[number];
  setColor: (newColor: (typeof ColorVariation)[number]) => void;
  setSize: (newSize: (typeof SizeVariation)[number]) => void;
  getQuery: () => string;
}

export const testStore = create<TestState>((set, get) => ({
  color: ColorVariation[0],
  size: SizeVariation[0],
  setColor: (newColor: (typeof ColorVariation)[number]) => {
    set(() => ({ color: newColor }));
  },
  setSize: (newSize: (typeof SizeVariation)[number]) => {
    set(() => ({ size: newSize }));
  },
  getQuery: () => {
    return `?color=${get().color}&size=${get().size}`;
  },
}));
