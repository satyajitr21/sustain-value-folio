import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

const navigationItems = [
  { name: 'About Satyajit', href: '/' },
  { name: 'Education', href: '/education' },
  { name: 'Research', href: '/research' },
  { name: 'Teaching', href: '/teaching' },
  { name: 'Industry Experience', href: '/industry' },
  { name: 'CV', href: '/cv' },
  { name: 'Blog', href: '/blog' },
  { name: 'Updates', href: '/news' },
  { name: 'Contact', href: '/contact' },
  { name: 'Beyond the Desk', href: '/beyond-the-desk' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Name */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-serif font-semibold text-academic-heading hover:text-primary transition-academic"
            >
              Academic Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-academic ${
                  isActive(item.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-academic-body hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-3 py-2 rounded-md text-base font-medium transition-academic ${
                        isActive(item.href)
                          ? 'bg-primary/10 text-primary'
                          : 'text-academic-body hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}