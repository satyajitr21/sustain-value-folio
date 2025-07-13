import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, MessageCircle, Heart, Share2 } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Supply Chains: Beyond Green Washing",
    excerpt: "Exploring how organizations can move beyond superficial environmental initiatives to build truly sustainable value chains that create lasting impact.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Sustainability",
    featured: true,
    likes: 24,
    comments: 8
  },
  {
    id: 2,
    title: "From Industry to Academia: Lessons Learned in the Transition",
    excerpt: "Reflections on transitioning from industry roles to doctoral studies, and how professional experience enriches academic research.",
    date: "2023-12-10",
    readTime: "6 min read",
    category: "Academia",
    featured: false,
    likes: 18,
    comments: 12
  },
  {
    id: 3,
    title: "Teaching in the Digital Age: Engaging the Next Generation",
    excerpt: "Thoughts on modern pedagogy, student engagement, and the role of technology in business education.",
    date: "2023-11-22",
    readTime: "5 min read",
    category: "Teaching",
    featured: false,
    likes: 15,
    comments: 6
  },
  {
    id: 4,
    title: "The Social Dimension of Operations Management",
    excerpt: "Why social responsibility should be at the core of operations strategy, not an afterthought.",
    date: "2023-10-08",
    readTime: "7 min read",
    category: "Research",
    featured: false,
    likes: 32,
    comments: 14
  },
  {
    id: 5,
    title: "Conference Reflections: Key Takeaways from ICOMS 2023",
    excerpt: "Insights from the International Conference on Operations Management and Sustainability, including emerging trends and research directions.",
    date: "2023-09-15",
    readTime: "4 min read",
    category: "Conferences",
    featured: false,
    likes: 21,
    comments: 9
  }
];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-academic-heading mb-6">
            My Thoughts
          </h1>
          <p className="text-lg text-academic-body max-w-4xl mx-auto leading-relaxed">
            Reflections on sustainability, academia, teaching, and research. 
            A space for informal thoughts and insights from my academic journey.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-academic-heading">
                Featured Post
              </h2>
            </div>
            
            <Card className="shadow-academic-elegant bg-gradient-subtle overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-primary/5 p-8 lg:p-12 flex items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="default">{featuredPost.category}</Badge>
                        <Badge variant="outline">Featured</Badge>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-serif font-bold text-academic-heading mb-4 leading-tight">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-academic-body leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-academic-caption mb-6">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <Button asChild size="lg">
                        <Link to={`/blog/${featuredPost.id}`}>
                          Read Full Post <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-8 lg:p-12 flex items-center justify-center">
                    <div className="w-full max-w-sm">
                      <div className="aspect-square bg-primary/20 rounded-2xl flex items-center justify-center">
                        <MessageCircle className="h-24 w-24 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-academic-heading mb-4">
              Recent Posts
            </h2>
            <p className="text-academic-body">
              Exploring ideas at the intersection of sustainability, operations, and academia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="shadow-academic-card hover:shadow-academic-elegant transition-academic group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-academic-caption text-sm">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-serif text-academic-heading group-hover:text-primary transition-academic">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-academic-body leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-academic-caption text-sm">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-3 w-3 mr-1" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories & Topics */}
        <section className="mt-16 bg-muted/30 rounded-2xl p-8">
          <h2 className="text-2xl font-serif font-bold text-academic-heading mb-6 text-center">
            Topics I Write About
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-academic-subheading mb-2">Sustainability</h3>
              <p className="text-academic-body text-sm">
                Environmental responsibility, circular economy, and sustainable business practices
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-academic-subheading mb-2">Academia</h3>
              <p className="text-academic-body text-sm">
                Research insights, academic life, and the journey of doctoral studies
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-academic-subheading mb-2">Teaching</h3>
              <p className="text-academic-body text-sm">
                Pedagogical approaches, student engagement, and educational innovation
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 text-center">
          <Card className="shadow-academic-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-academic-heading mb-4">
                Stay Updated
              </h2>
              <p className="text-academic-body mb-6">
                Subscribe to receive notifications about new blog posts and research updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}