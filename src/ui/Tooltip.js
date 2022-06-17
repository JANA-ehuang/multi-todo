import Popup from "reactjs-popup";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DeleteIcon from "@mui/icons-material/Delete";
import "../App.css";
import { useDispatch } from "react-redux";
import { todoActions } from "../store";

const Tooltip = ({ listId, itemId }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(todoActions.removeTodo({ listId, itemId }));
  };

  return (
    <Popup
      trigger={(open) => (
        <MoreVertIcon className="mx-1 text-gray-400 hover:text-black" />
      )}
      position="right center"
      on="hover"
      closeOnDocumentClick
      arrow
    >
      <button className="border border-red-600 w-full flex justify-start m-0 h-[30px] hover:bg-gray-100 items-center">
        <CalendarMonthIcon className="mx-1 mr-2" fontSize="small" />
        Set due date
      </button>
      <button
        className="border border-red-600 w-full flex justify-start m-0 h-[30px] hover:bg-gray-100 items-center"
        onClick={deleteHandler}
      >
        <DeleteIcon className="mx-1 mr-2" fontSize="small" />
        Delete item
      </button>
    </Popup>
  );
};

export default Tooltip;
