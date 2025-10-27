import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, BookOpen, Users, Presentation, GraduationCap } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    date: "2025-10-01",
    type: "award",
    title: "Received the Wipro Sustainability Scholar award for 2025-26",
    description: "Honored to receive the Wipro Sustainability Scholar award for the academic year 2025-26.",
    icon: Award,
    category: "Award"
  },
  {
    id: 2,
    date: "2025-09-25",
    type: "conference",
    title: "Paper accepted for 22nd ANZAM Operations, Supply Chain and Services Management Symposium",
    description: "My paper has been accepted for presentation at the 22nd ANZAM Operations, Supply Chain and Services Management Symposium.",
    icon: Presentation,
    category: "Conference"
  },
  {
    id: 3,
    date: "2025-08-11",
    type: "conference",
    title: "Paper accepted for 19th ISDSI-Global Conference 2025",
    description: "My paper has been accepted for presentation at the 19th ISDSI-Global Conference 2025.",
    icon: Presentation,
    category: "Conference"
  },
  {
    id: 4,
    date: "2025-08-04",
    type: "conference",
    title: "Paper accepted for 2025 Decision Sciences Institute Annual Conference",
    description: "My paper has been accepted for presentation at the 2025 Decision Sciences Institute Annual Conference.",
    icon: Presentation,
    category: "Conference"
  },
  {
    id: 5,
    date: "2025-06-17",
    type: "conference",
    title: "Paper accepted for 85th Academy of Management Annual Meeting",
    description: "My paper got accepted for presentation at the 85th Academy of Management (AOM) Annual meeting in Copenhagen.",
    link: {
      text: "Read the abstract",
      url: "https://journals.aom.org/doi/abs/10.5465/AMPROC.2025.14082abstract"
    },
    icon: Presentation,
    category: "Conference"
  },
  {
    id: 6,
    date: "2025-06-13",
    type: "research",
    title: "Co-authored article published by ET Auto",
    description: "My co-authored article was published by ET Auto.",
    link: {
      text: "Read the article",
      url: "https://auto.economictimes.indiatimes.com/news/commercial-vehicle/financing-the-electric-vehicle-revolution-addressing-challenges-in-india/121815514"
    },
    icon: BookOpen,
    category: "Publication"
  },
  {
    id: 7,
    date: "2025-06-07",
    type: "research",
    title: "Co-authored article published by ET Auto",
    description: "My co-authored article was published by ET Auto.",
    link: {
      text: "Read the article",
      url: "https://www.autocarpro.in/opinion-blogs/why-leasing-dominates-indias-commercial-ev-market-126883"
    },
    icon: BookOpen,
    category: "Publication"
  },
  {
    id: 8,
    date: "2025-05-08",
    type: "conference",
    title: "Presented at 35th Annual POMS Conference in Atlanta",
    description: "Presented three of my papers in 35th Annual POMS Conference in Atlanta.",
    icon: Presentation,
    category: "Conference"
  },
  {
    id: 9,
    date: "2025-04-24",
    type: "conference",
    title: "Served as chair at International Sustainability Conference",
    description: "Served as a chair for two tracks at the International Sustainability Conference (jointly hosted by IIMB and WIPRO).",
    icon: Users,
    category: "Conference"
  },
  {
    id: 10,
    date: "2025-01-01",
    type: "research",
    title: "Teaching case study published by Harvard Business Publishing",
    description: "My co-authored teaching case study was published by Harvard Business Publishing.",
    link: {
      text: "Have a look",
      url: "https://hbsp.harvard.edu/product/IM053B-PDF-ENG?Ntt=Business%20Model%20Innovation%20at%20Log9"
    },
    icon: BookOpen,
    category: "Publication"
  },
  {
    id: 11,
    date: "2024-12-04",
    type: "conference",
    title: "Second best doctoral research paper award at POMS Indian International",
    description: "Presented two of my research papers at POMS Indian International conference at IIM Ranchi and one of them won the second best doctoral research paper award.",
    icon: Award,
    category: "Award"
  }
];

export default function News() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-academic-heading mb-6">
            What I'm Up To
          </h1>
          <p className="text-lg text-academic-body max-w-3xl mx-auto leading-relaxed">
            A glimpse into recent milestones and activities from my academic and professional journey — including research progress, publications, conference presentations, collaborations, ad-hoc services, awards, and other professional highlights.
          </p>
        </div>

        {/* News Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-8">
            {newsItems.map((item, index) => {
              const IconComponent = item.icon;
              
              return (
                <div key={item.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm"></div>
                  
                  {/* Content card */}
                  <div className="ml-20">
                    <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="secondary">{item.category}</Badge>
                              <div className="flex items-center text-academic-caption text-sm">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{new Date(item.date).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}</span>
                              </div>
                            </div>
                            
                            <h3 className="text-lg font-serif font-semibold text-academic-heading mb-2">
                              {item.title}
                            </h3>
                            
                            <p className="text-academic-body leading-relaxed">
                              {item.description}
                              {item.link && (
                                <>
                                  {" "}
                                  <a 
                                    href={item.link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 underline font-medium"
                                  >
                                    {item.link.text}
                                  </a>
                                </>
                              )}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* Upcoming Events */}
        <section className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-academic-heading mb-8 text-center">
            Upcoming Events
          </h2>
          
          <div className="space-y-4">
            <Card className="shadow-academic-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Presentation className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-academic-heading">
                        India Management Research Conference
                      </h3>
                      <Badge variant="outline">5-7 December 2025</Badge>
                    </div>
                    <p className="text-academic-body text-sm">
                      Attending the India Management Research Conference at IIM Ahmedabad.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-academic-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Presentation className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-academic-heading">
                        POMS India Annual conference 2025
                      </h3>
                      <Badge variant="outline">13-16 December 2025</Badge>
                    </div>
                    <p className="text-academic-body text-sm">
                      Will present my ongoing works at IIM Sambalpur.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
}