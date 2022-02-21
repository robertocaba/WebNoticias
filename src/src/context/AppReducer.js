const listNews = (state, action) => {
    switch (action.type) {
      case "GET_CHARACTERS":
        return {
          ...state,
          listNews: action.payload,
        };
      default:
        return state;
    }
  };
  export default listNews;