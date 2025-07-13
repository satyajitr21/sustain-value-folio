import { Link } from 'react-router-dom';
import { Mail, Linkedin, GraduationCap, FileText } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-academic-heading mb-4">
              Academic Portfolio
            </h3>
            <p className="text-academic-body text-sm leading-relaxed">
              Doctoral Student in Production and Operations Management at IIM Bangalore. 
              Research focus on socially and environmentally sustainable value chains.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-academic-heading mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/research" 
                  className="text-academic-body hover:text-primary transition-academic text-sm"
                >
                  Research Papers
                </Link>
              </li>
              <li>
                <Link 
                  to="/cv" 
                  className="text-academic-body hover:text-primary transition-academic text-sm"
                >
                  Academic CV
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-academic-body hover:text-primary transition-academic text-sm"
                >
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-academic-body hover:text-primary transition-academic text-sm"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-academic-heading mb-4">
              Connect
            </h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:your.email@iimb.ac.in" 
                className="flex items-center text-academic-body hover:text-primary transition-academic text-sm"
              >
                <Mail className="h-4 w-4 mr-2" />
                Academic Email
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-academic-body hover:text-primary transition-academic text-sm"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn Profile
              </a>
              <a 
                href="https://scholar.google.com/citations?user=yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-academic-body hover:text-primary transition-academic text-sm"
              >
                <GraduationCap className="h-4 w-4 mr-2" />
                Google Scholar
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-academic-caption text-sm">
            © {new Date().getFullYear()} Academic Portfolio. All rights reserved.
          </p>
          <p className="text-academic-caption text-sm mt-2 sm:mt-0">
            Built for academic excellence and research impact.
          </p>
        </div>
      </div>
    </footer>
  );
}