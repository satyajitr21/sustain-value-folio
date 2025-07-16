import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, BookOpen, Users, Presentation, GraduationCap } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    date: "2024-01-20",
    type: "research",
    title: "Paper Accepted at Journal of Operations Management",
    description: "My working paper on sustainable value chain design has been accepted for publication in the Journal of Operations Management, pending minor revisions.",
    icon: BookOpen,
    category: "Publication"
  },
  {
    id: 2,
    date: "2023-12-15",
    type: "teaching",
    title: "Outstanding Teaching Assistant Award",
    description: "Received the Outstanding Teaching Assistant Award from IIM Bangalore for excellence in supporting Operations Management courses.",
    icon: Award,
    category: "Award"
  },
  {
    id: 3,
    date: "2023-11-08",
    type: "conference",
    title: "Presentation at ICOMS 2023",
    description: "Presented research on sustainability metrics at the International Conference on Operations Management and Sustainability in Mumbai.",
    icon: Presentation,
    category: "Conference"
  },
  {
    id: 4,
    date: "2023-10-22",
    type: "research",
    title: "Research Excellence Fellowship Renewed",
    description: "Received renewal of Research Excellence Fellowship from IIM Bangalore for continued outstanding research performance.",
    icon: GraduationCap,
    category: "Fellowship"
  },
  {
    id: 5,
    date: "2023-09-30",
    type: "research",
    title: "Best Student Paper Award",
    description: "Won the Best Student Paper Award at ICOMS 2023 for the paper on sustainability metrics in operations management.",
    icon: Award,
    category: "Award"
  },
  {
    id: 6,
    date: "2023-08-14",
    type: "teaching",
    title: "Guest Lecture at XLRI Jamshedpur",
    description: "Delivered a guest lecture on sustainable supply chain design for the Executive MBA program at XLRI Jamshedpur.",
    icon: Users,
    category: "Teaching"
  },
  {
    id: 7,
    date: "2023-07-05",
    type: "research",
    title: "Research Collaboration with Industry Partner",
    description: "Initiated research collaboration with leading automotive manufacturer for real-world validation of sustainable supply chain frameworks.",
    icon: BookOpen,
    category: "Collaboration"
  },
  {
    id: 8,
    date: "2023-05-20",
    type: "conference",
    title: "Accepted for POMS 2024 Conference",
    description: "Abstract accepted for presentation at the Production and Operations Management Society Annual Conference in Minneapolis.",
    icon: Presentation,
    category: "Conference"
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

        {/* Summary Stats */}
        <section className="mt-16 bg-muted/30 rounded-2xl p-8">
          <h2 className="text-2xl font-serif font-bold text-academic-heading mb-8 text-center">
            Academic Milestones
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-academic-heading mb-1">3</div>
              <p className="text-academic-body text-sm">Working Papers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Presentation className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-academic-heading mb-1">8</div>
              <p className="text-academic-body text-sm">Conference Presentations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-academic-heading mb-1">5</div>
              <p className="text-academic-body text-sm">Awards & Honors</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-academic-heading mb-1">12</div>
              <p className="text-academic-body text-sm">Guest Lectures</p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-academic-heading mb-8 text-center">
            Upcoming Events
          </h2>
          
          <div className="space-y-4">
            <Card className="shadow-academic-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Presentation className="h-6 w-6 text-accent-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-academic-heading">
                        POMS Annual Conference 2024
                      </h3>
                      <Badge variant="outline">May 2024</Badge>
                    </div>
                    <p className="text-academic-body text-sm">
                      Presenting research on environmental impact assessment in automotive supply chains
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-academic-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-academic-heading">
                        Dissertation Defense
                      </h3>
                      <Badge variant="outline">Late 2024</Badge>
                    </div>
                    <p className="text-academic-body text-sm">
                      Final dissertation defense scheduled for completion of doctoral program
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Subscribe for Updates */}
        <section className="mt-16 text-center">
          <Card className="shadow-academic-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-xl font-serif font-bold text-academic-heading mb-4">
                Stay Updated
              </h2>
              <p className="text-academic-body mb-6">
                Subscribe to receive notifications about new publications, 
                conference presentations, and other academic milestones.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}