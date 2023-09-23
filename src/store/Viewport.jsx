import { create } from "zustand";
import { useMediaQuery } from "@mui/material";

const useViewportStore = create((set) => ({
  lg: { breakpoint: "960", state: true },
  setLg: (matches) => set({ breakpoint: "960", state: matches }),
}));

export default function useViewport() {
  const matches = useMediaQuery("(min-width:960px)");
  useViewportStore((state) => state.lg);
  return matches;
}
// export default function useViewport() {
//   const matches = useMediaQuery("(min-width:960px)");
//   const customFetch = viewport((state) => state.lg);
//   const setLg = useViewport((state) => state.setLg(matches));
//   console.log("customFetch", customFetch);
//   return customFetch}
