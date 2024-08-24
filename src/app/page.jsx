"use client"

import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate URL shortening by generating a fake short link
    const fakeShortenedUrl = `${window.location.origin}/short.ly/${Math.random().toString(36).substring(7)}`;
    setShortenedUrl(fakeShortenedUrl);
    setCopySuccess('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopySuccess('Copied!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="w-full bg-green-600 p-4 text-white text-center">
        <h1 className="text-4xl font-bold">Proxima</h1>
        <p className="mt-2">Your go-to link shortener</p>
      </header>

      {/* Menu */}
      <nav className="w-full bg-white shadow-md p-4 text-center space-x-4">
        <a href="#" className="text-green-600 hover:underline">Home</a>
        <a href="#" className="text-gray-600 hover:underline">Features</a>
        <a href="#" className="text-gray-600 hover:underline">Profile</a>
        <a href="#" className="text-gray-600 hover:underline">Contact</a>
      </nav>
      

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center py-20">
        <h2 className="text-3xl font-semibold mb-8">Shorten your link in seconds</h2>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <input
            type="url"
            placeholder="Enter your URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-3 border rounded shadow-sm"
            required
          />
          <button type="submit" className="w-full p-3 bg-green-500 text-white rounded shadow-sm">
            Generate Short Link
          </button>
        </form>

        {shortenedUrl && (
          <div className="mt-6 p-4 bg-white rounded shadow-lg text-center space-y-4">
            <p className="text-lg">Your shortened URL:</p>
            <div className="flex items-center justify-center space-x-4">
              <a href={shortenedUrl} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                {shortenedUrl}
              </a>
              <button
                onClick={copyToClipboard}
                className="px-3 py-1 bg-gray-200 text-gray-600 rounded shadow-sm"
              >
                Copy
              </button>
            </div>
            {copySuccess && <p className="text-green-500">{copySuccess}</p>}
          </div>
        )}
      </main>
    </div>
  );
}
