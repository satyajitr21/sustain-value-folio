import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Building, FileText } from 'lucide-react';
import heroImage from '@/assets/hero-academic.jpg';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Academic Research Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-academic-heading mb-6 leading-tight">
                Doctoral Student in<br />
                <span className="text-primary">Operations Management</span>
              </h1>
              
              <p className="text-xl text-academic-body mb-8 leading-relaxed">
                Researching socially and environmentally sustainable value chains at IIM Bangalore. 
                Hoping to contribute to — and occasionally nudge — the conversation between research and practice.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="font-medium">
                  <Link to="/research">
                    View Research <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/cv">
                    Download CV
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-primary shadow-academic-elegant overflow-hidden">
                {/* Placeholder for professional photo - you can replace this */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-16 w-16 text-primary" />
                    </div>
                    <p className="text-primary font-medium">Professional Photo</p>
                    <p className="text-primary/80 text-sm mt-1">Upload your image here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-academic-heading mb-4">
              Academic Overview
            </h2>
            <p className="text-lg text-academic-body max-w-3xl mx-auto">
              Combining rigorous academic research with practical industry experience 
              to advance sustainable operations management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-academic-heading mb-2">Research Focus</h3>
                <p className="text-academic-body text-sm leading-relaxed">
                  Sustainable value chains and operations management
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-academic-heading mb-2">Current Status</h3>
                <p className="text-academic-body text-sm leading-relaxed">
                  Doctoral Student at IIM Bangalore
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-academic-heading mb-2">Industry Experience</h3>
                <p className="text-academic-body text-sm leading-relaxed">
                  Daimler, Maruti Suzuki, Everest Group
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-academic-heading mb-2">Education</h3>
                <p className="text-academic-body text-sm leading-relaxed">
                  MBA (IIM Kozhikode), BTech (NIT Durgapur)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Highlight */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-academic-heading mb-6">
                Research Impact
              </h2>
              <p className="text-lg text-academic-body mb-6 leading-relaxed">
                My research focuses on developing frameworks for sustainable value chains 
                that balance environmental responsibility, social impact, and economic viability. 
                Through rigorous academic inquiry and industry collaboration, I aim to contribute 
                to both theoretical knowledge and practical solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-academic-body">Sustainable supply chain design and optimization</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-academic-body">Environmental impact assessment in operations</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-academic-body">Social responsibility in value chain management</p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link to="/research">
                    Explore Research <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-academic-card">
              <h3 className="text-xl font-serif font-semibold text-academic-heading mb-4">
                Current Research
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium text-academic-subheading">Working Paper</h4>
                  <p className="text-academic-body text-sm mt-1">
                    "Sustainable Value Chain Design: A Multi-Objective Optimization Approach"
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-medium text-academic-subheading">In Progress</h4>
                  <p className="text-academic-body text-sm mt-1">
                    "Environmental Impact Assessment in Automotive Supply Chains"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}