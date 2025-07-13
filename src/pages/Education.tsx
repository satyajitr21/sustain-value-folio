import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-academic-heading mb-6">
            Education
          </h1>
          <p className="text-lg text-academic-body max-w-3xl mx-auto leading-relaxed">
            My academic journey through premier institutions, building a strong foundation 
            in business management and engineering for research excellence.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {/* Current - Doctoral Studies */}
          <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-academic-heading">
                        Doctor of Philosophy (PhD)
                      </h2>
                      <h3 className="text-xl text-primary font-semibold mt-1">
                        Production and Operations Management
                      </h3>
                    </div>
                    <Badge variant="default" className="self-start sm:self-center mt-2 sm:mt-0">
                      Current
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-academic-body">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Indian Institute of Management Bangalore</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>2021 - Expected 2025</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Research Focus</h4>
                      <p className="text-academic-body leading-relaxed">
                        Socially and environmentally sustainable value chains with emphasis on 
                        multi-objective optimization, supply chain design, and environmental impact assessment.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Key Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Advanced Operations Research</Badge>
                        <Badge variant="secondary">Supply Chain Management</Badge>
                        <Badge variant="secondary">Sustainability in Business</Badge>
                        <Badge variant="secondary">Research Methodology</Badge>
                        <Badge variant="secondary">Statistical Analysis</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* MBA */}
          <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Award className="h-8 w-8 text-accent-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-academic-heading">
                        Master of Business Administration (MBA)
                      </h2>
                      <h3 className="text-xl text-academic-subheading font-semibold mt-1">
                        Operations and Supply Chain Management
                      </h3>
                    </div>
                    <Badge variant="outline" className="self-start sm:self-center mt-2 sm:mt-0">
                      Completed
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-academic-body">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Indian Institute of Management Kozhikode</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>2015 - 2017</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Specialization</h4>
                      <p className="text-academic-body leading-relaxed">
                        Focused on operations management, supply chain strategy, and business analytics 
                        with a strong foundation in strategic management and organizational behavior.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Academic Achievements</h4>
                      <ul className="text-academic-body space-y-1">
                        <li>• Dean's List for academic excellence</li>
                        <li>• Best project award in Operations Management</li>
                        <li>• Active member of Operations and Analytics Club</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* BTech */}
          <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-secondary/50 rounded-xl flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-secondary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-academic-heading">
                        Bachelor of Technology (BTech)
                      </h2>
                      <h3 className="text-xl text-academic-subheading font-semibold mt-1">
                        Engineering
                      </h3>
                    </div>
                    <Badge variant="outline" className="self-start sm:self-center mt-2 sm:mt-0">
                      Completed
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-academic-body">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>National Institute of Technology Durgapur</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>2011 - 2015</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Foundation</h4>
                      <p className="text-academic-body leading-relaxed">
                        Strong technical foundation in engineering principles, mathematical modeling, 
                        and analytical thinking that provides the quantitative backbone for my current research.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-academic-subheading mb-2">Key Skills Developed</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Mathematical Modeling</Badge>
                        <Badge variant="secondary">Systems Thinking</Badge>
                        <Badge variant="secondary">Problem Solving</Badge>
                        <Badge variant="secondary">Technical Analysis</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8">
          <h2 className="text-2xl font-serif font-bold text-academic-heading mb-6 text-center">
            Continuous Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-academic-subheading mb-3">Certifications & Courses</h3>
              <ul className="text-academic-body space-y-2">
                <li>• Advanced Research Methods in Management</li>
                <li>• Sustainable Supply Chain Management</li>
                <li>• Data Analytics for Operations</li>
                <li>• Academic Writing and Publishing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-academic-subheading mb-3">Academic Honors</h3>
              <ul className="text-academic-body space-y-2">
                <li>• Research Excellence Fellowship, IIM Bangalore</li>
                <li>• Academic Merit Scholarship, IIM Kozhikode</li>
                <li>• National Merit Scholarship, NIT Durgapur</li>
                <li>• Best Student Paper Award (Conference)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}