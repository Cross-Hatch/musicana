export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,

  //  REMOVE THE TOKEN VALUE AFTER FINISHING
  // token: 'BQAvnTgJCsFtsWIQDi0ZK5Lz73-wg3Mh_CGLIYPbMiLheZYaL4iiwi4llT0G7IKtfFmBfZin0nhCnOf2iRcUOJOgaGmOj5v4aP9PMDmcHqewt44G_X2nDm1xg9IQlZzrpHweqJ-0byenj08vlZz3NqfamotD19wZo6RI2FcXcqTuY1brt1Ky',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };

    default:
      return state;
  }
};

export default reducer;
