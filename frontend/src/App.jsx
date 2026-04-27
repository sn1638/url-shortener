import URLShortener from './components/URLShortener'

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-600 to-purple-700">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">URL Shortener</h1>
            <p className="text-xl text-blue-100">Create short, shareable links in seconds</p>
          </div>
          <URLShortener />
        </div>
      </div>
    </div>
  )
}

export default App
