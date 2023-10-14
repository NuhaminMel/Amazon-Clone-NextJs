import { useDispatch } from "react-redux";
import { resetFavoriteData } from "@/Store/nextSlice";

function ResetFavItems() {
  const dispatch = useDispatch();
  const handleResetFav = () => {
    const confirmReset = window.confirm(
      "You are resetting your favorite items, Do you want to proceed?"
    );
    if (confirmReset) {
      dispatch(resetFavoriteData());
    }
  };
  return (
    <button
      onClick={handleResetFav}
      className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
    >
      Reset
    </button>
  );
}

export default ResetFavItems;
