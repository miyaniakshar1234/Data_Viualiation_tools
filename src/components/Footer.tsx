import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">About</h3>
              <p className="mt-4 text-base text-gray-500">
                DataViz Pro provides powerful data visualization tools for modern businesses.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-indigo-600">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-indigo-600">API Reference</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-indigo-600">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Connect</h3>
              <div className="flex space-x-6 mt-4">
                <a href="#" className="text-gray-500 hover:text-indigo-600">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              © 2024 DataViz Pro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}