'use client';

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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="w-full bg-green-600 p-4 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Proxima</h1>
        <p className="mt-2">Your next level link shortener</p>
      </header>

      {/* Menu */}
      <nav className="w-full bg-white shadow-md p-4 text-center space-x-4">
        <a href="#" className="text-green-600 hover:underline">Home</a>
        <a href="#" className="text-gray-600 hover:underline">QR code</a>
        <a href="#" className="text-gray-600 hover:underline">Profile</a>
        <a href="#" className="text-gray-600 hover:underline">Settings</a>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow py-10 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">Shorter links, Better Marketing</h2>

        <form onSubmit={handleSubmit} className="w-full max-w-sm md:max-w-md space-y-4 px-4 md:px-0">
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
          <div className="mt-6 p-4 bg-white rounded shadow-lg text-center space-y-4 w-full max-w-sm md:max-w-md">
            <p className="text-lg">Your shortened URL:</p>
            <div className="flex items-center justify-center space-x-4">
              <a href={shortenedUrl} className="text-blue-500 break-all" target="_blank" rel="noopener noreferrer">
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

        {/* Benefits of Link Shorteners */}
        <div className="mt-12 w-full max-w-lg bg-white p-6 rounded shadow-lg mx-4 md:mx-0">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Benefits of Using Link Shorteners</h3>
          <p className="text-gray-700 mb-4">
            Link shorteners make it easier to share long URLs, especially on social media and messaging platforms. 
            They also provide valuable analytics, allowing you to track click-through rates and monitor the effectiveness 
            of your links in real time.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">QR Codes in Marketing</h3>
          <p className="text-gray-700">
            QR codes are a powerful tool in modern marketing strategies. When combined with shortened links, 
            they allow users to quickly access content by scanning the code with their mobile devices. 
            This is particularly effective for offline marketing campaigns, such as posters, flyers, and business cards.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white p-6 text-center">
        <p>Proxima © 2024 | <a href="#" className="text-green-400 hover:underline">Privacy Policy</a> | <a href="#" className="text-green-400 hover:underline">Terms of Service</a></p>
        <p className="mt-2">Contact us: <a href="mailto:support@proxima.com" className="text-green-400 hover:underline">seanblack720@gmail.com</a></p>
      </footer>
    </div>
  );
}
