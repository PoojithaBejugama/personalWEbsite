import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-apple-lightgray/70 backdrop-blur-sm border-t border-gray-200 text-gray-600 py-12">
      <div className="max-w-[980px] mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">
            © {currentYear} TutorPro. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Made with care for students everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
