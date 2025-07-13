import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, ExternalLink, FileText, Calendar, Award, BookOpen } from 'lucide-react';

export default function CV() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-academic-heading mb-6">
            Curriculum Vitae
          </h1>
          <p className="text-lg text-academic-body max-w-3xl mx-auto leading-relaxed mb-8">
            Complete academic and professional profile documenting my journey in 
            operations management research and sustainable value chains.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-medium">
              <Download className="mr-2 h-5 w-5" />
              Download Full CV (PDF)
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="mr-2 h-5 w-5" />
              View on Google Scholar
            </Button>
          </div>
        </div>

        {/* CV Highlights */}
        <div className="space-y-8">
          {/* Current Position */}
          <Card className="shadow-academic-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-academic-heading mb-2">
                    Current Position
                  </h2>
                  <p className="text-lg text-primary font-medium">
                    Doctoral Student, Production and Operations Management
                  </p>
                  <p className="text-academic-body">
                    Indian Institute of Management Bangalore | 2021 - Present
                  </p>
                </div>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold text-academic-subheading mb-2">Research Focus</h3>
                <p className="text-academic-body leading-relaxed">
                  Socially and environmentally sustainable value chains with emphasis on 
                  multi-objective optimization, supply chain design, and environmental impact assessment.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education Summary */}
          <Card className="shadow-academic-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-academic-heading mb-2">
                    Education
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-academic-subheading">
                      PhD, Production and Operations Management
                    </h3>
                    <Badge variant="default">2021-2025</Badge>
                  </div>
                  <p className="text-academic-body">Indian Institute of Management Bangalore</p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-academic-subheading">
                      MBA, Operations and Supply Chain Management
                    </h3>
                    <Badge variant="outline">2015-2017</Badge>
                  </div>
                  <p className="text-academic-body">Indian Institute of Management Kozhikode</p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-academic-subheading">
                      BTech, Engineering
                    </h3>
                    <Badge variant="outline">2011-2015</Badge>
                  </div>
                  <p className="text-academic-body">National Institute of Technology Durgapur</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Publications & Research */}
          <Card className="shadow-academic-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-academic-heading mb-2">
                    Publications & Research
                  </h2>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-academic-subheading mb-3">Working Papers</h3>
                  <div className="space-y-3">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-medium text-academic-heading mb-1">
                        "Sustainable Value Chain Design: A Multi-Objective Optimization Approach"
                      </h4>
                      <p className="text-academic-body text-sm mb-2">
                        Under review at <em>Journal of Operations Management</em>
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Working Paper</Badge>
                        <Badge variant="outline">Under Review</Badge>
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-medium text-academic-heading mb-1">
                        "Social Impact Assessment in Supply Chain Networks"
                      </h4>
                      <p className="text-academic-body text-sm mb-2">
                        In revision for <em>Production and Operations Management</em>
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Working Paper</Badge>
                        <Badge variant="outline">Revision Stage</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-academic-subheading mb-3">Conference Publications</h3>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-medium text-academic-heading mb-1">
                      "Sustainability Metrics in Operations Management: A Systematic Review"
                    </h4>
                    <p className="text-academic-body text-sm mb-2">
                      <em>Proceedings of International Conference on Operations Management and Sustainability</em>, 2023
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="default">Published</Badge>
                      <Badge variant="outline">Best Paper Award</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Experience */}
          <Card className="shadow-academic-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-academic-heading mb-6">
                Professional Experience
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-academic-subheading">Senior Operations Analyst</h3>
                    <p className="text-academic-body">Daimler India Commercial Vehicles</p>
                  </div>
                  <Badge variant="outline">2019-2021</Badge>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-academic-subheading">Operations Management Trainee</h3>
                    <p className="text-academic-body">Maruti Suzuki India Limited</p>
                  </div>
                  <Badge variant="outline">2017-2019</Badge>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-academic-subheading">Research Analyst</h3>
                    <p className="text-academic-body">Everest Group</p>
                  </div>
                  <Badge variant="outline">2015-2017</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Competencies */}
          <Card className="shadow-academic-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-academic-heading mb-6">
                Skills & Competencies
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-academic-subheading mb-3">Research Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Quantitative Analysis</Badge>
                    <Badge variant="secondary">Mixed Methods</Badge>
                    <Badge variant="secondary">Case Study Research</Badge>
                    <Badge variant="secondary">Statistical Modeling</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-academic-subheading mb-3">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">R Programming</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">MATLAB</Badge>
                    <Badge variant="secondary">SQL</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-academic-subheading mb-3">Domain Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Supply Chain Management</Badge>
                    <Badge variant="secondary">Sustainability</Badge>
                    <Badge variant="secondary">Operations Research</Badge>
                    <Badge variant="secondary">Quality Management</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-academic-subheading mb-3">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Academic Writing</Badge>
                    <Badge variant="secondary">Presentation</Badge>
                    <Badge variant="secondary">Project Management</Badge>
                    <Badge variant="secondary">Cross-cultural Communication</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Awards & Recognition */}
          <Card className="shadow-academic-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-academic-heading mb-6">
                Awards & Recognition
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-academic-subheading">Research Excellence Fellowship</h3>
                    <p className="text-academic-body">IIM Bangalore</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">2023</Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-academic-subheading">Best Student Paper Award</h3>
                    <p className="text-academic-body">ICOMS Conference</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">2023</Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-academic-subheading">Outstanding Teaching Assistant Award</h3>
                    <p className="text-academic-body">IIM Bangalore</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">2023</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download Section */}
        <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8">
          <h2 className="text-2xl font-serif font-bold text-academic-heading mb-4">
            Complete Academic CV
          </h2>
          <p className="text-academic-body mb-6 max-w-2xl mx-auto">
            For a comprehensive view of my academic and professional journey, 
            including detailed publication lists, conference presentations, 
            and complete work history, download my full CV.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download Full CV (PDF)
            </Button>
            <Button variant="outline" size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              Request Academic References
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}