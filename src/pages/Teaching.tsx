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
              <p className="text-lg text-academic-body leading-relaxed max-w-4xl mx-auto mb-4">
                As a teacher, my objective is to first show why my topic (whatever I am teaching) matters, then make it intuitively understandable for everyone, regardless of their background and experience. The next level of detailing follows based on the audience.
              </p>
              <p className="text-lg text-academic-body leading-relaxed max-w-4xl mx-auto mb-4">
                My approach combines academic content with real-world applications, encouraging students to connect theory with practice while developing their analytical and communication capabilities.
              </p>
              <p className="text-lg text-academic-body leading-relaxed max-w-4xl mx-auto">
                In this Gen-AI era, I do not resist Gen-Zs using AI tools; rather, I prefer to guide students to use them responsibly to enhance their learning, not bypass their own reasoning.
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
            {/* Course Instructor */}
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
                          Course Instructor
                        </h3>
                        <p className="text-lg text-primary font-medium mt-1">
                          IIM Bangalore
                        </p>
                      </div>
                      <div className="flex items-center text-academic-body mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>2024 - 2025</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-academic-body leading-relaxed">
                        Conducted full 90-minute course sessions across multiple programs including PGPBA preparatory courses, 
                        PhD preparatory courses, and undergraduate foundations programs with consistently high student ratings.
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-academic-subheading mb-2">Courses Taught</h4>
                        <ul className="text-academic-body space-y-2 ml-4">
                          <li>• <strong>Data Analysis using MS Excel</strong> (PGPBA preparatory, 2025)
                            <br />8 sessions | 79 participants | 4.67/5 rating (47 respondents)</li>
                          <li>• <strong>Linear Algebra and Optimization</strong> (PhD and PreDoc preparatory, 2025)
                            <br />2 sessions | 41 participants | 4.54/5 rating (19 respondents)</li>
                          <li>• <strong>Mathematics for Economics – Optimisation and Matrices</strong> (Pre-Doctoral course, 2025)
                            <br />5 sessions | 12 participants | 4.52/5 rating (12 respondents)</li>
                          <li>• <strong>Introduction to Operations Management</strong> (Foundations for undergraduates, 2025)
                            <br />1 session | 74 participants | 4.5/5 rating (54 respondents)</li>
                          <li>• <strong>Essentials of Mathematics</strong> (PGPBA preparatory, 2024)
                            <br />13 sessions | 71 participants | 4.22/5 rating (40 respondents)</li>
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Data Analysis</Badge>
                        <Badge variant="secondary">Linear Algebra</Badge>
                        <Badge variant="secondary">Operations Management</Badge>
                        <Badge variant="secondary">Mathematics</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Teaching Assistant */}
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
                          Teaching Assistant
                        </h3>
                        <p className="text-lg text-academic-subheading font-medium mt-1">
                          IIM Bangalore
                        </p>
                      </div>
                      <div className="flex items-center text-academic-body mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>2021 - Present</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-academic-body leading-relaxed">
                        Provided teaching assistance for core and elective courses across multiple programs,
                        receiving "Excellent" grades for all teaching assignments.
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-academic-subheading mb-2">Courses Assisted</h4>
                        <ul className="text-academic-body space-y-1 ml-4">
                          <li>• <strong>Supply Chain Management</strong> (Elective by Prof. Amar Sapra) - 2 times | Grade: Excellent</li>
                          <li>• <strong>Operations Management</strong> (Core by Prof. Jishnu Hazra) | Grade: Excellent</li>
                          <li>• <strong>Operations Management</strong> (Core by Prof. Shalique MS) - 2 times | Grade: Excellent</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-academic-subheading mb-2">Tutorial Sessions</h4>
                        <ul className="text-academic-body space-y-1 ml-4">
                          <li>• 16 sessions for Supply Chain Management elective (PGP, EPGP, and PGPEM students)</li>
                          <li>• 10 sessions for Operations Management core course (PGP and PGPEM students)</li>
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Supply Chain Management</Badge>
                        <Badge variant="secondary">Operations Management</Badge>
                        <Badge variant="secondary">Tutorial Sessions</Badge>
                        <Badge variant="secondary">Grade: Excellent</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Academic Activities */}
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
                          Additional Academic Activities
                        </h3>
                        <p className="text-lg text-academic-subheading font-medium mt-1">
                          IIM Bangalore & Others
                        </p>
                      </div>
                      <div className="flex items-center text-academic-body mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>2021 - Present</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-academic-body leading-relaxed">
                        Engaged in various academic activities including invited sessions, research assistance,
                        and specialized presentations for international participants.
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-academic-subheading mb-2">Key Activities</h4>
                        <ul className="text-academic-body space-y-1 ml-4">
                          <li>• <strong>Invited Session:</strong> India's cadaveric organ donation program for GNAM participants at IIMB</li>
                          <li>• <strong>Research Assistant:</strong> Production & Operations Management area, IIMB (2021-23)</li>
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Guest Sessions</Badge>
                        <Badge variant="secondary">Research Assistance</Badge>
                        <Badge variant="secondary">Healthcare Operations</Badge>
                        <Badge variant="secondary">International Programs</Badge>
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
          
          <div className="mb-8">
            <h3 className="text-xl font-serif font-semibold text-academic-heading mb-4 text-center">
              Core Courses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-academic-heading mb-3">Operations Management</h4>
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
                  <h4 className="font-semibold text-academic-heading mb-3">Quantitative Techniques</h4>
                  <p className="text-academic-body text-sm leading-relaxed">
                    Statistics, Operations Research, optimization methods and data analysis
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-academic-heading mb-3">Supply Chain Management</h4>
                  <p className="text-academic-body text-sm leading-relaxed">
                    Network design, logistics, procurement, and supply chain coordination
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold text-academic-heading mb-4 text-center">
              Elective Courses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-academic-heading mb-3">Operations Interfaces</h4>
                  <p className="text-academic-body text-sm leading-relaxed">
                    Cross-functional operations and strategic interfaces
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-academic-heading mb-3">Analytics with Excel/R/Python</h4>
                  <p className="text-academic-body text-sm leading-relaxed">
                    Data analysis tools and programming for business analytics
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-academic-heading mb-3">Sustainable SCM</h4>
                  <p className="text-academic-body text-sm leading-relaxed">
                    Environmental management, circular economy, and sustainable practices
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-academic-card hover:shadow-academic-elegant transition-academic text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-academic-heading mb-3">Healthcare OM</h4>
                  <p className="text-academic-body text-sm leading-relaxed">
                    Healthcare operations, supply chains, and service delivery
                  </p>
                </CardContent>
              </Card>
            </div>
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
                {/* Empty list as requested */}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-academic-subheading mb-4">Student Testimonials</h3>
              <blockquote className="text-academic-body italic bg-card rounded-lg p-4 mb-3">
                "Satyajit handled every class with an open mind towards the students, and ensured that we are all on the same page regarding what we're learning, especially those who are participating."
              </blockquote>
              <blockquote className="text-academic-body italic bg-card rounded-lg p-4 mb-3">
                "Course was adept in covering the area of operations as a beginner"
              </blockquote>
              <blockquote className="text-academic-body italic bg-card rounded-lg p-4 mb-3">
                "Got to learn Excel from scratch. The pace could've been little slower. But I learned a lot from the instructor."
              </blockquote>
              <blockquote className="text-academic-body italic bg-card rounded-lg p-4 mb-3">
                "The faculty was very attentive to everyone's queries. But the course content was too much for this period"
              </blockquote>
              <blockquote className="text-academic-body italic bg-card rounded-lg p-4 mb-3">
                "U have great potential to become a teacher that students need. Being a person from humanities background, maths was disaster for me. but ur class prompt us to speak , ask our doubts without any hesitation. and way u explain to us from the scratch is very good. Notion that these students know the things and skipping the steps was not found in ur class. keep on doing this . Go ahead with this same level of enthusiasm, dont loose it once u become a professor."
              </blockquote>
              <blockquote className="text-academic-body italic bg-card rounded-lg p-4">
                "The instructor explained the math concepts really clearly and made them easy to follow. One small suggestion would be to give a few homework problems (which is not done in class) based on that day's lesson (other than excel solver)-it would help us practice and understand the concepts even better."
              </blockquote>
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
}