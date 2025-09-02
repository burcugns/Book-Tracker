import ReadingCreate from "../components/ReadingCreate";
import ReadingList from "../components/ReadingList";

function ReadingPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-emerald-900">
          Book Tracker
        </h1>
        <ReadingCreate />
        <ReadingList />
      </div>
    </div>
  );
}

export default ReadingPage;


