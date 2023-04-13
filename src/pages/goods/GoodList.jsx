import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function GoodList(props) {

  const { size } = useSelector((preState) => preState.app_reducer);

  const { token, userInfo, accessRoutes } = useSelector(
    (state) => state.user_reducer
  );
  const dispatch = useDispatch();
  const addSize = () => {
    dispatch({ type: "APP_REDUCER_SIZE_ADD", data: 1 });
  };
  const subSize = () => {
    dispatch({ type: "APP_REDUCER_SIZE_SUB", data: 4 });
  };
  return (
    <div>
      <h2>商品列表</h2>
      <h2>{size}</h2>
      <button onClick={addSize}>size+1</button>
      <button onClick={subSize}>size-4</button>
    </div>
  );
}
