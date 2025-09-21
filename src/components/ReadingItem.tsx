import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit, FaCheckCircle, FaCheck } from "react-icons/fa";
import type { ReadingType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeReadingById, updateReadingById } from "../redux/ReadingSlice";
import { useState } from "react";
import { format } from "date-fns";
import { delete_book } from "./ApiCalls";
import { update_book } from "./ApiCalls";

interface ReadingItemProps {
  reading: ReadingType;
}

function ReadingItem({ reading }: ReadingItemProps) {
  const { id, title, author, category, isRead, date } = reading;
  const dispatch = useDispatch();
  const formattedDate = format(new Date(date), "dd MMMM yyyy HH:mm");
  const [editable, setEditable] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedAuthor, setUpdatedAuthor] = useState(author || "");
  const [updatedCategory, setUpdatedCategory] = useState(category || "");

  let updatedIsRead = isRead;

  const toggleRead = () => {
    updatedIsRead = !isRead;

    //backend update
    update_book(
      id,
      updatedTitle,
      updatedAuthor,
      updatedCategory,
      updatedIsRead
    );

    //frontend update
    const updated: ReadingType = {
      id,
      title: updatedTitle,
      author: updatedAuthor,
      category: updatedCategory,
      isRead: updatedIsRead,
      date,
    };
    dispatch(updateReadingById(updated));
    setEditable(false);
  };

  const handleRemove = () => {
    delete_book(id);
    dispatch(removeReadingById(id));
  };

  const handleUpdate = () => {
    update_book(
      id,
      updatedTitle,
      updatedAuthor,
      updatedCategory,
      updatedIsRead
    );

    const updated: ReadingType = {
      id,
      title: updatedTitle,
      author: updatedAuthor,
      category: updatedCategory,
      isRead: updatedIsRead,
      date,
    };
    dispatch(updateReadingById(updated));
    setEditable(false);
  };

  return (
    <div
      className={`flex justify-between items-start rounded-2xl p-5 transition-all duration-300 border shadow-sm
        ${
          isRead
            ? "bg-gradient-to-br from-emerald-50 to-emerald-100/70 border-emerald-200 hover:shadow-md"
            : "bg-white border-neutral-200 hover:shadow-lg hover:scale-[1.01]"
        }`}
    >
      {editable ? (
        <div className="flex-1 flex flex-col gap-2">
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-emerald-400 outline-none text-neutral-800"
            placeholder="Title"
          />
          <input
            type="text"
            value={updatedAuthor || ""}
            onChange={(e) => setUpdatedAuthor(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-emerald-400 outline-none text-neutral-800"
            placeholder="Author"
          />
          <input
            type="text"
            value={updatedCategory || ""}
            onChange={(e) => setUpdatedCategory(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-emerald-400 outline-none text-neutral-800"
            placeholder="Category"
          />
          <span className="text-sm text-emerald-500 mt-1">
            Created at: {date}
          </span>
        </div>
      ) : (
        <div className="flex-1">
          <span
            className={`block text-lg font-semibold tracking-tight ${
              isRead ? "text-emerald-800" : "text-emerald-900"
            }`}
          >
            {title}
          </span>
          <div className="mt-1 flex flex-wrap items-center text-sm text-emerald-600 gap-2">
            {author && <span>{author}</span>}
            {category && (
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium shadow-sm ${
                  isRead
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                {category}
              </span>
            )}
            {date && <span className="text-emerald-500">{formattedDate}</span>}
          </div>
        </div>
      )}

      <div className="flex space-x-4 text-neutral-400 mt-1">
        <span
          onClick={toggleRead}
          className={`cursor-pointer transition-transform duration-300 text-xl hover:scale-125 ${
            isRead
              ? "text-emerald-600 hover:text-emerald-700"
              : "hover:text-emerald-600"
          }`}
        >
          <FaCheckCircle />
        </span>
        {editable ? (
          <FaCheck
            onClick={handleUpdate}
            className="cursor-pointer hover:text-neutral-700 transition-transform duration-300 text-lg hover:scale-125"
          />
        ) : (
          <FaRegEdit
            onClick={() => setEditable(true)}
            className="cursor-pointer hover:text-neutral-700 transition-transform duration-300 text-lg hover:scale-125"
          />
        )}
        <MdDeleteForever
          onClick={handleRemove}
          className="cursor-pointer text-lg hover:text-red-500 transition-transform duration-300 hover:scale-125"
        />
      </div>
    </div>
  );
}

export default ReadingItem;
