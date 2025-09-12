import ReadingCreate from "../components/ReadingCreate";
import ReadingList from "../components/ReadingList";
import Navbar from "../components/Navbar";

function ReadingPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-emerald-700">
          Personal Reading List 📚
        </h1>

        <ReadingCreate />
        <ReadingList />
      </div>
    </div>
  );
}

export default ReadingPage;
