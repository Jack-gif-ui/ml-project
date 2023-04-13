import produce from "immer";
const initState = {
  size: 10,
};
function app_reducer(preState = initState, action) {
  const { type, data } = action;
    console.log(action)
    return produce(preState, (newState) => {
      switch (type) {
        case "APP_REDUCER_SIZE_ADD":
          console.log("@@@");
          newState.size += data;
          break;
        case "APP_REDUCER_SIZE_SUB":
          newState.size -= data;
          break;
        default:
      }
    });

}

export default app_reducer;
