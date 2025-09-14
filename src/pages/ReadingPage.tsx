import ReadingCreate from "../components/ReadingCreate";
import ReadingList from "../components/ReadingList";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { setReadings } from "../redux/ReadingSlice";
import { useDispatch } from "react-redux";

function ReadingPage() {
  const { state } = useLocation();
  const { data } = state || {};
  const dispatch = useDispatch();

  async function get_user_books(email: string) {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/user_books?email=${email}`
      );
      return response.data;
    } catch (error) {
      return [];
    }
  }

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
