import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Award, Calendar, MessageCircle } from 'lucide-react';

export default function Teaching() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-academic-heading mb-6">
            Teaching
          </h1>
          <p className="text-lg text-academic-body max-w-4xl mx-auto leading-relaxed">
            Passionate about education and knowledge transfer, I strive to create engaging 
            learning experiences that bridge academic theory with practical applications 
            in operations management and sustainability.
          </p>
        </div>

        {/* Teaching Philosophy */}
        <section className="mb-16">
          <Card className="shadow-academic-card bg-gradient-subtle">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-academic-heading text-center">
                Teaching Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-academic-body leading-relaxed max-w-4xl mx-auto">
                I believe in fostering critical thinking and practical problem-solving skills 
                through interactive learning experiences. My approach combines rigorous academic 
                content with real-world applications, encouraging students to connect theory 
                with practice while developing their analytical and communication capabilities.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Teaching Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-academic-heading mb-8 text-center">
            Teaching Experience
          </h2>

          <div className="space-y-6">
            {/* Teaching Assistant */}
            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-academic-heading">
                          Teaching Assistant - Operations Management
                        </h3>
                        <p className="text-lg text-primary font-medium mt-1">
                          IIM Bangalore
                        </p>
                      </div>
                      <div className="flex items-center text-academic-body mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>2022 - Present</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-academic-body leading-relaxed">
                        Support undergraduate and postgraduate courses in operations management, 
                        supply chain management, and business analytics. Conduct tutorial sessions, 
                        grade assignments, and provide academic guidance to students.
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-academic-subheading mb-2">Key Responsibilities</h4>
                        <ul className="text-academic-body space-y-1 ml-4">
                          <li>• Conduct weekly tutorial sessions for 150+ students</li>
                          <li>• Design and evaluate case study assignments</li>
                          <li>• Provide individual academic mentoring and career guidance</li>
                          <li>• Assist in curriculum development and assessment design</li>
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Operations Management</Badge>
                        <Badge variant="secondary">Supply Chain Analytics</Badge>
                        <Badge variant="secondary">Business Statistics</Badge>
                        <Badge variant="secondary">Case Study Method</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guest Lectures */}
            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-accent-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-academic-heading">
                          Guest Lecturer - Sustainable Operations
                        </h3>
                        <p className="text-lg text-academic-subheading font-medium mt-1">
                          Various Business Schools
                        </p>
                      </div>
                      <div className="flex items-center text-academic-body mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>2021 - Present</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-academic-body leading-relaxed">
                        Delivered guest lectures on sustainable operations, environmental 
                        management, and circular economy principles across multiple business 
                        schools and executive education programs.
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-academic-subheading mb-2">Recent Lectures</h4>
                        <ul className="text-academic-body space-y-1 ml-4">
                          <li>• "Circular Economy in Manufacturing" - Executive MBA Program, IIM Kozhikode</li>
                          <li>• "Sustainable Supply Chain Design" - PGDM Program, XLRI Jamshedpur</li>
                          <li>• "Green Operations Strategy" - MDI Gurgaon Management Development Program</li>
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Sustainability</Badge>
                        <Badge variant="secondary">Circular Economy</Badge>
                        <Badge variant="secondary">Green Operations</Badge>
                        <Badge variant="secondary">Executive Education</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Workshop Facilitation */}
            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/50 rounded-xl flex items-center justify-center">
                      <MessageCircle className="h-8 w-8 text-secondary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-academic-heading">
                          Workshop Facilitator - Research Methods
                        </h3>
                        <p className="text-lg text-academic-subheading font-medium mt-1">
                          Doctoral Programs & Faculty Development
                        </p>
                      </div>
                      <div className="flex items-center text-academic-body mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>2022 - Present</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-academic-body leading-relaxed">
                        Conduct workshops on quantitative research methods, data analysis 
                        techniques, and academic writing for doctoral students and faculty 
                        members across various institutions.
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Research Methodology</Badge>
                        <Badge variant="secondary">Statistical Analysis</Badge>
                        <Badge variant="secondary">Academic Writing</Badge>
                        <Badge variant="secondary">Data Visualization</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Teaching Interests */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-academic-heading mb-8 text-center">
            Teaching Interests
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-academic-heading mb-3">Operations Management</h3>
                <p className="text-academic-body text-sm leading-relaxed">
                  Core principles, process design, capacity planning, and quality management
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-academic-heading mb-3">Supply Chain Management</h3>
                <p className="text-academic-body text-sm leading-relaxed">
                  Network design, logistics, procurement, and supply chain coordination
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-academic-heading mb-3">Sustainable Operations</h3>
                <p className="text-academic-body text-sm leading-relaxed">
                  Environmental management, circular economy, and sustainable business practices
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-academic-heading mb-3">Business Analytics</h3>
                <p className="text-academic-body text-sm leading-relaxed">
                  Data analysis, optimization models, and decision support systems
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-academic-heading mb-3">Research Methods</h3>
                <p className="text-academic-body text-sm leading-relaxed">
                  Quantitative methods, statistical analysis, and research design
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-academic-heading mb-3">Strategy & Innovation</h3>
                <p className="text-academic-body text-sm leading-relaxed">
                  Strategic operations, innovation management, and organizational change
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Student Feedback & Recognition */}
        <section className="bg-muted/30 rounded-2xl p-8">
          <h2 className="text-2xl font-serif font-bold text-academic-heading mb-8 text-center">
            Student Feedback & Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-academic-subheading mb-4">Teaching Awards</h3>
              <ul className="text-academic-body space-y-2">
                <li>• Outstanding Teaching Assistant Award, IIM Bangalore (2023)</li>
                <li>• Best Tutorial Sessions Award, Student Council (2022)</li>
                <li>• Excellence in Academic Mentoring Recognition (2023)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-academic-subheading mb-4">Student Testimonials</h3>
              <blockquote className="text-academic-body italic bg-card rounded-lg p-4 mb-3">
                "Exceptional ability to explain complex concepts clearly and relate them to real-world scenarios."
              </blockquote>
              <blockquote className="text-academic-body italic bg-card rounded-lg p-4">
                "Patient, knowledgeable, and always willing to help students succeed."
              </blockquote>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              View Complete Teaching Portfolio
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}