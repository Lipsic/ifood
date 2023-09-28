import { create } from "zustand";

const useModalStore = create((set) => ({
  bag: false,
  bagHandler: () =>
    set((state) => {
      return Object.assign(state, { bag: !state.bag });
    }),
  profile: false,
  openProfile: () =>
    set((state) => {
      return Object.assign(state, { profile: !state.profile });
    }),
}));

export default function useModal(value) {
  const modals = useModalStore();
  return modals;
}
