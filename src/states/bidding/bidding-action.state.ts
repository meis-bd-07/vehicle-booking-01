import { IUid } from "@type/global";
import { create } from "zustand"

type State =  {
  selected: Record<IUid, boolean>;
}
type Action = {
  toggleSelect: (id: IUid, value: boolean) => void;
}

const initialState: State = {
  selected: {},
}

export const useBiddingActionState = create<State & Action>((set, get) => ({
  ...initialState,
  toggleSelect: (id, value) => {
    const selected = get().selected;
    set({selected: {...selected, [id]: value}})
  },
}))
