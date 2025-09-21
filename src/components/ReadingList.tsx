import { useSelector } from "react-redux";
import ReadingItem from "./ReadingItem";
import type { RootState } from "../redux/Store";
import type { ReadingType } from "../types/Types";

function ReadingList() {
  const { readings } = useSelector((state: RootState) => state.reading);

  return (
    <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl shadow-md ring-1 ring-neutral-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-emerald-900">
          📚 Your Reading List
        </h2>
      </div>

      <div className="space-y-4 divide-y divide-neutral-200/60">
        {readings && readings.length > 0 ? (
          readings
            .slice()
            .reverse()
            .map((reading: ReadingType) => <ReadingItem reading={reading} />)
        ) : (
          <p className="text-neutral-500">No readings added yet.</p>
        )}
      </div>
    </div>
  );
}

export default ReadingList;
