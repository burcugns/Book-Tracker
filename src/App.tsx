

import ReadingCreate from './components/ReadingCreate'
import ReadingList from './components/ReadingList'
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center tracking-tight text-green-900 mb-8">
          Book Tracker
        </h1>
        <ReadingCreate/>
        <ReadingList/>
      </div>
    </div>
  )
}

export default App
