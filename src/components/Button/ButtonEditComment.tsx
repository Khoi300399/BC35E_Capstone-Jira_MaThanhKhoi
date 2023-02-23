import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteCommentApi,
  getCommentApi,
  updateCommentApi,
} from "../../redux/commentReducer/commentReducer";
import { DispathType } from "../../redux/config";

type Props = {
  id: number;
  text: string;
  taskId: number;
};

const ButtonEditComment = ({ id, taskId, text }: Props) => {
  const dispatch: DispathType = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");

  function handleEditClick() {
    setIsEditing(true);
    setEditText(text);
  }

  function handleCancelClick() {
    setIsEditing(false);
  }

  function handleSaveClick() {
    dispatch(updateCommentApi(id, editText));
    dispatch(getCommentApi(taskId));
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <div className="flex items-center gap-x-2 w-full">
        <input
          type="text"
          defaultValue={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="w-full px-6 py-4 border  rounded-xl text-sm font-medium placeholder:text-text4  dark:placeholder:text-text2 dark:bg-darkSecondary dark:text-white dark:border-darkStoke"
        />
        <button
          onClick={handleSaveClick}
          className="flex items-center justify-center px-1 w-10 h-8 rounded border-2 dark:border-darkStoke dark:bg-darkSecondary dark:hover:bg-blue-200 dark:hover:text-blue-500 dark:text-white border-strock shadow-sm bg-lite  hover:bg-blue-500 hover:bg-opacity-20 hover:text-blue-500 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={handleCancelClick}
          className="flex items-center justify-center px-1 w-10 h-8 rounded border-2 dark:border-darkStoke dark:bg-darkSecondary dark:hover:bg-red-200 dark:hover:text-red-500 dark:text-white border-strock shadow-sm bg-lite hover:bg-error hover:bg-opacity-20 hover:text-error transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex gap-x-2">
        <button
          onClick={handleEditClick}
          className="text-xs text-blue-500 cursor-pointer"
        >
          Edit
        </button>

        <button
          onClick={async () => {
            await dispatch(deleteCommentApi(id));
            await dispatch(getCommentApi(taskId));
          }}
          className="text-xs text-error cursor-pointer"
        >
          Delete
        </button>
      </div>
    );
  }
};

export default ButtonEditComment;
