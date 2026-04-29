import { useState } from 'react'
import { shortenURL } from '../services/api'

export default function URLShortener() {
  const [longURL, setLongURL] = useState('')
  const [shortURL, setShortURL] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const handleShorten = async (e) => {
    e.preventDefault()
    
    if (!longURL.trim()) {
      setError('Please enter a valid URL')
      return
    }

    setLoading(true)
    setError('')
    setShortURL('')

    try {
      const response = await shortenURL(longURL)
      // Use the backend URL directly for shortened links
      const backendURL = 'https://url-shortener-7-2oor.onrender.com'
      setShortURL(`${backendURL}/${response.id}`)
      setLongURL('')
    } catch (err) {
      setError(err.message || 'Failed to shorten URL. Please try again.')
      setShortURL('')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortURL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 space-y-6">
      <form onSubmit={handleShorten} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
            Long URL
          </label>
          <input
            id="url"
            type="url"
            placeholder="https://example.com/very/long/url"
            value={longURL}
            onChange={(e) => setLongURL(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            disabled={loading}
          />
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 disabled:scale-100"
        >
          {loading ? 'Shortening...' : 'Shorten URL'}
        </button>
      </form>

      {shortURL && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-3">
          <h3 className="text-sm font-medium text-gray-700">Your shortened URL:</h3>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={shortURL}
              readOnly
              className="flex-1 px-3 py-2 bg-white border border-green-300 rounded-lg text-gray-700 font-mono text-sm"
            />
            <button
              onClick={handleCopy}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </div>
      )}

      <div className="border-t pt-6 text-center">
        <p className="text-sm text-gray-600">
          Enter a long URL above to generate a short, shareable link
        </p>
      </div>
    </div>
  )
}
