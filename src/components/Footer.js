export default function Footer() {
    return (
      <footer className="text-center p-2 bg-white shadow-md">
        <p className="text-xs text-gray-600 mb-1">
          Made with <span className="text-red-500">❤️</span> using Next.js & Tailwind CSS by The Product Person
        </p>
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} - All rights reserved.
        </p>
      </footer>
    );
  }
  