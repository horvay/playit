import { createGlobalState } from "react-hooks-global-state";
import { GAMES } from "./games";

export const { GlobalStateProvider, useGlobalState } = createGlobalState({
    selectedGame: GAMES[0]
});
