import { create } from "zustand";

const useModalStore = create((set) => ({
  component: "bag",
  state: false,
}));

export default function useModal(value) {
  //   const matches = useMediaQuery("(min-width:960px)");
  useModalStore((state) => state.isBagActive);
  return value;
}
