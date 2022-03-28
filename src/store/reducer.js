import { Songs } from "../components/Songs/Songs";
import { PLAY_SONG } from "./constants";
const initState = {
  Songs,
};

function reducer(state, action) {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        ...state.Songs[0].song.play()
      };
    default:
      throw new Error("Invalid action!");
  }
}

export { initState };
export default reducer;
