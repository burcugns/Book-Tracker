import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReading } from "../redux/ReadingSlice";
import { add_books_to_backend } from "./ApiCalls";

type Props = {
  user_email: string;
};

function ReadingCreate({ user_email }: Props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const handleAdd = async () => {
    if (title.trim().length === 0) {
      alert("Please enter a book title");
      return;
    }

    const now = new Date();
    const date = now.toISOString();
    try {
      const payload = await add_books_to_backend(
        title,
        author,
        category,
        user_email,
        date
      );

      dispatch(addReading(payload));
      setTitle("");
      setAuthor("");
      setCategory("");
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl shadow-md ring-1 ring-neutral-200 p-6 mb-6">
      <div className="flex flex-wrap gap-3 items-stretch">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Book or article title..."
          className="flex-1 min-w-[200px] px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-300/50 focus:border-emerald-400 transition-all duration-200 placeholder-neutral-400"
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Author (optional)"
          className="w-40 min-w-[150px] px-3 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-300/50 placeholder-neutral-400"
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Category (optional)"
          className="w-44 min-w-[150px] px-3 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-300/50 placeholder-neutral-400"
        />
        <button
          onClick={handleAdd}
          className="px-6 h-12 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-medium rounded-xl hover:scale-[1.03] hover:shadow-lg transition-all duration-200"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ReadingCreate;
