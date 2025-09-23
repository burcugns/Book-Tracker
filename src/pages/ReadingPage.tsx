import ReadingCreate from "../components/ReadingCreate";
import ReadingList from "../components/ReadingList";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setReadings } from "../redux/ReadingSlice";
import { useDispatch } from "react-redux";
import { get_user_books } from "../components/ApiCalls";

function ReadingPage() {
  const { state } = useLocation();
  const { data } = state || {};
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data?.email) return;
    get_user_books(data.email).then((result) => {
      dispatch(setReadings(result));
    });
  }, [data?.email, dispatch]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-emerald-700">
          Personal Reading List 📚
        </h1>

        <ReadingCreate user_email={data?.email} />
        <ReadingList />
      </div>
    </div>
  );
}

export default ReadingPage;
