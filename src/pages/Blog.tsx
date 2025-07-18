
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, MessageCircle, Heart, Share2, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "AI for Sustainability, but What about (Social) Sustainability in AI?",
    excerpt: "Artificial Intelligence has positioned itself as a pivotal instrument in advancing sustainability, yet it poses significant risks to social sustainability through data colonisation, biased algorithms, and worker exploitation.",
    fullContent: `
Artificial Intelligence (AI) has positioned itself as a pivotal instrument in advancing the sustainability paradigm, offering new instruments to tackle global challenges. Within the environmental domain, AI optimises energy utilisation in intelligent infrastructures and enhances agroecological efficiency through precision agriculture, thereby contributing to resource conservation and the amelioration of ecological footprints. Its capacity of generating predictive models from expansive datasets empowers industries to diminish waste streams, curtail greenhouse gas emissions, and adapt proactively to the exigencies of climatic shifts. Furthermore, AI's potential extends to economic sustainability by refining operational frameworks and catalysing innovative practices. Yet, it poses risks to social sustainability – Endangering equitable access through data colonisation, threatening equity and privacy through biased algorithms and exploiting workers in its supply chain, such as those labelling traumatic data under opaque, underpaid conditions.

Social sustainability, as a multifaceted construct, includes principles of equity, inclusivity, human rights, and ethical governance – Dimensions that AI has the potential to either bolster or undermine, contingent upon its deployment and oversight. For instance, could prioritising AI-driven agricultural solutions in wealthier regions exacerbate food security disparities in less-resourced communities? This question echoes concerns raised in recent scholarship, such as that of Vinuesa et al. (2020), who cautioned against unintended social trade-offs in AI's sustainability applications. Scholars such as Mittelstadt et al. (2016) have underscored that AI systems, if not judiciously managed, can exacerbate social inequities through entrenched biases embedded within algorithmic decision-making processes. For instance, adopting AI in domains such as hiring or predictive policing has been shown to perpetuate racial and socioeconomic biases when trained on historically skewed datasets, a concern rigorously documented by O'Neil (2016) in her seminal work Weapons of Math Destruction. Moreover, the erosion of privacy emerges as a salient risk, with AI-driven surveillance systems threatening individual autonomy and dignity, as Floridi et al. (2018) address in their exploration of AI's ethical implications, noting the tension between technological efficiency and human rights. Beyond algorithmic biases, the repetitive low-skilled tasks in AI's supply chain, such as data labelling, raises pressing social concerns. Workers, often in low-wage regions, endure significant mental anguish, labelling distressing images, yet are inadequately compensated and frequently uninformed about their contributions. This underscores a critical ethical gap in AI development, compromising social sustainability at the foundational level of the technology's production.

This essay thus interrogates whether AI's promise for sustainability might be overshadowed by its social costs, setting the stage for a deeper exploration of its algorithmic, interpersonal, and labour-related implications.

**Digital divides and data disparities**

While laden with transformative potential, the integration of AI into sustainability initiatives may imperil equitable access to resources through data colocalisation and its exacerbation of systemic disparities. Data colocalisation – The concentration of data aggregation, processing, and AI deployment within privileged geographic or socioeconomic enclaves disproportionately benefits regions with advanced technological infrastructure, sidelining marginalised populations, as Gurumurthy and Bharthur (2018) argue. This dynamic is vividly illustrated by AI-driven agricultural innovations, which optimise yields predominantly in data-rich industrialised nations, while smallholder farmers in the Global South, deprived of digitised resources or connectivity, are excluded. Compounding this, Couldry and Mejias (2019), in The Costs of Connection, contend that AI promotes a form of data colonialism, colonising human life by appropriating personal data to fuel capitalist accumulation, often under the guise of sustainable progress. Such practices transform lived experiences into commodified datasets, reinforcing corporate dominance and restricting access to AI's benefits. Crawford (2021) similarly warns in Atlas of AI that the proprietary grip on AI technologies and data entrenches power asymmetries, risking the neglect of diverse contexts critical to social sustainability. These trends threaten to deepen inequities rather than foster inclusive sustainability unless data and AI systems are purposefully democratised.

**Shadows of surveillance and skewed Systems**

The expansive integration of AI into sustainability efforts harbours significant risks to privacy and entrenches biases through algorithmic mechanisms, jeopardising the ethical bedrock of social sustainability. AI's insatiable appetite for data, evident in applications like smart city infrastructures or environmental tracking, undermines privacy by converting routine human activities into perpetually monitored datasets, a tension Floridi et al. (2018) unpack in their analysis of AI's ethical dilemmas. For instance, AI-driven traffic cameras deployed to optimise traffic flow to reduce congestion and emissions can simultaneously function as surveillance tools, profiling individuals without their knowledge or consent. Concurrently, algorithmic biases amplify inequity when AI systems, reliant on flawed or unrepresentative training data, yield discriminatory results. Mittelstadt et al. (2016) note how such biases in hiring algorithms perpetuate historical prejudices, disproportionately favouring certain groups. A stark example emerges from Murgia (2024) in Code Dependent, where AI facial recognition, intended to curb crime, frequently misidentifies people of colour due to skewed datasets, leading to wrongful suspicions and arrests, exposing a racial bias baked into ostensibly neutral technology. O'Neil (2016) complements this in Weapons of Math Destruction, illustrating how credit-scoring AI disadvantages low-income communities, reflecting capitalist priorities over fairness. Together, these threats to privacy and equity underscore AI's potential to erode social sustainability unless governed by stringent ethical frameworks.

**Invisible labour, visible scars: Factories where humans aid machines**

The operational efficacy of AI, pivotal to its sustainability applications, hinges on an often-overlooked foundation: the gruelling labour of data labelling, which often exacts a severe toll on workers tasked with processing mentally destructive content. Individuals, frequently employed in low-wage regions, endure profound psychological distress while annotating images or videos of violence, abuse, or other traumatic material essential for training AI algorithms. Yet, they are rarely afforded adequate compensation or mental health support, as Murgia (2024) documented. For instance, content moderators labelling datasets for AI-driven safety systems may spend hours sifting through graphic imagery, leading to anxiety and depression, with little recourse or recognition. Compounding this exploitation, these workers are often kept in the dark about the broader purpose of their labour, unaware that their efforts enable advancements in AI for profit-driven enterprises, a disconnect Couldry and Mejias (2019) critique as part of data colonialism's opaque machinery (in The Costs of Connection). This shadowy supply chain reveals a stark irony: while AI promises sustainable futures, its reliance on underpaid, uninformed labourers enduring mental agony undermines the social sustainability it claims to uphold, demanding urgent ethical scrutiny and reform.

**The bright side: Redeeming sustainability amid its shadows**

Alongside the troubling dimensions of AI – Its threats to equitable access, privacy, fairness, and the hidden toll of data labelling, a contrasting perspective emerges, revealing its potential to serve as a powerful ally in advancing environmental and social sustainability. In environmental protection, AI's analytical strength shines through in applications like optimising renewable energy systems; for instance, Google's DeepMind reduced data centre cooling energy by 40% using predictive algorithms, exemplifying a scalable reduction in carbon footprints. Likewise, tools like Global Forest Watch leverage AI to monitor deforestation through satellite imagery, enabling proactive conservation efforts. On the social front, when harnessed ethically, AI can enhance equity and inclusion; IBM's AI Fairness 360 toolkit, for example, actively works to eliminate algorithmic bias, fostering just outcomes in fields like healthcare and education. Additionally, AI-powered telemedicine initiatives in rural India illustrate how technology can democratise healthcare access for marginalised communities. Positioned against its darker implications, these advancements highlight AI's redemptive promise, contingent upon a commitment to ethical design and equitable implementation, offering a hopeful counterbalance to its more troubling shadows.

**Charting the course: Ethical frameworks for sustainable AI**

After delineating AI's perils and illuminating its capacity for environmental and social good, the question remains: how can we steer AI toward a sustainable future that prioritises both planetary health and human dignity? To fully unlock its transformative potential for sustainability while meticulously addressing its inherent risks, it is imperative to seamlessly intertwine ethical design, robust regulation, labour justice, and equitable data access. Ethical design serves as the bedrock, emphasising transparency, accountability, and inclusivity.

Imagine an AI system tasked with monitoring deforestation. Integrating diverse perspectives from Indigenous communities and climate scientists avoids skewed outputs that might favour corporate interests over ecological balance, ensuring equitable benefits across society. Regulatory oversight builds on this foundation, with frameworks like the European Union's AI Act (2023) providing a sophisticated, risk-based approach.

Consider an AI optimising water distribution in drought-stricken regions. Stringent audits would ensure that it prioritises vulnerable populations fairly, safeguard privacy, and prevent resource hoarding by powerful entities.

Yet, AI's promise falters if we ignore labour justice: the unseen workers annotating data for climate models, often sifting through harrowing images of environmental collapse, deserve not just fair wages but also mental health resources and transparency about their role, aligning their well-being with the sustainability mission they support.

Equally critical is data democratisation, exemplified by an open-source repository of soil and weather data that empowers smallholder farmers in sub-Saharan Africa to use AI for precision agriculture, boosting yields while narrowing the digital divide that often excludes marginalised groups.

Tying these strands together demands dynamic, multi-stakeholder collaboration. Think global coalitions of governments, tech innovators, and civil society, coupled with ongoing evaluation and capacity-building programs, like training rural cooperatives to wield AI tools effectively. Through this intricate tapestry of ethics, governance, justice, and inclusion, AI can transcend mere technological prowess, becoming a catalyst for a sustainable future.

**Conclusion**

As we traverse the multifaceted landscape of AI in sustainability, its dual nature comes sharply into focus. It can revolutionise environmental stewardship and economic efficiency yet is equally poised to unravel the threads of social equity and human dignity if left unchecked. From the outset, we recognise AI's promise: optimising smart grids to slash carbon emissions, enhancing precision agriculture to bolster food security, and leveraging vast datasets to minimise waste, as exemplified by Google's DeepMind reducing energy use by 40% and Global Forest Watch's vigilant deforestation monitoring. Yet, this optimism is tempered by darker realities. Data colocalisation and colonialism entrench resource disparities, as smallholder farmers languish while industrialised regions thrive. Privacy erosion and algorithmic biases, such as facial recognition, disproportionately target people of colour, compromising fairness. The agony of data labellers, underpaid and uninformed, sifting through traumatic content to fuel AI's growth is often ignored. In response, we better explore a path forward – Ethical design, embedding transparency and inclusivity, regulatory frameworks like the EU's AI Act ensuring accountability, labour justice uplifting exploited workers, and data democratisation levelling access. Thus, AI's potential to forge a sustainable future, where ecological resilience harmonises with social well-being, hinges not on its technological prowess alone but on our collective effort to embed ethics, equity, and justice into its design.

**Additional References**

Floridi, L., Cowls, J., Beltrametti, M., Chatila, R., Chazerand, P., Dignum, V., Luetge, C., Madelin, R., Pagallo, U., Rossi, F., Schafer, B., Valcke, P., & Vayena, E. (2018). AI4People – An Ethical Framework for a Good AI Society: Opportunities, Risks, Principles, and Recommendations. Minds and Machines, 28(4), 689-707.

Mittelstadt, B. D., Allo, P., Taddeo, M., Wachter, S., & Floridi, L. (2016). The ethics of algorithms: Mapping the debate. Big Data &Amp; Society, 3(2), 205395171667967.

Vinuesa, R., Azizpour, H., Leite, I., Balaam, M., Dignum, V., Domisch, S., Felländer, A., Langhans, S. D., Tegmark, M., & Fuso Nerini, F. (2020). The role of artificial intelligence in achieving the Sustainable Development Goals. Nature Communications, 11(1).

Gurumurthy, A. and Bharthur, D., Democracy and the algorithmic turn, SUR 27 (2018), accessed March 24, 2025, https://sur.conectas.org/en/democracy-and-the-algorithmic-turn.`,
    date: "2025-07-01",
    readTime: "12 min read",
    category: "Social sustainability",
    featured: true,
    likes: 3,
    comments: 0
  },
  {
    id: 2,
    title: "Financing the Electric Vehicle Revolution in India",
    excerpt: "A short reflection on my recent article in ET Auto (published on Jun 13, 2025), co-authored with Prof. Sreelata Jonnalagedda, highlighting the financing challenges and emerging solutions for commercial EV adoption in India.",
    date: "2025-06-13",
    readTime: "3 min read",
    category: "EV",
    featured: false,
    likes: 3,
    comments: 0
  }
];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(featuredPost?.likes || 0);
  const [showFullPost, setShowFullPost] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  const handleComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        text: newComment.trim(),
        author: 'Anonymous',
        date: new Date().toLocaleDateString()
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = featuredPost?.title || '';
    
    switch (platform) {
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'reddit':
        window.open(`https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
    }
    setShowShare(false);
  };

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
              <CardHeader className="border-b border-border/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="default">{featuredPost.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-academic-caption text-sm">
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
                </div>
                
                <CardTitle className="text-3xl lg:text-4xl font-serif font-bold text-academic-heading leading-tight">
                  {featuredPost.title}
                </CardTitle>
                
                <p className="text-lg text-academic-body leading-relaxed mt-4">
                  {featuredPost.excerpt}
                </p>
              </CardHeader>

              <CardContent className="p-8">
                <div className="text-center">
                  <Button 
                    onClick={() => setShowFullPost(true)}
                    className="group"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                {showFullPost && (
                  <div className="mt-8">
                    <div className="prose prose-lg max-w-none">
                      <div className="text-academic-body leading-relaxed space-y-6">
                        {featuredPost.fullContent?.split('\n\n').map((paragraph, index) => {
                          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                            const heading = paragraph.replace(/\*\*/g, '');
                            return (
                              <h3 key={index} className="text-xl font-serif font-bold text-academic-heading mt-8 mb-4">
                                {heading}
                              </h3>
                            );
                          }
                          return paragraph.trim() && (
                            <p key={index} className="text-academic-body leading-relaxed">
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    </div>

                    {/* Like, Comment and Share Section */}
                    <div className="mt-12 pt-8 border-t border-border/20">
                      <div className="flex items-center gap-6">
                        <button
                          onClick={handleLike}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                            liked 
                              ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                              : 'bg-muted/50 text-academic-caption hover:bg-muted'
                          }`}
                        >
                          <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
                          <span className="font-medium">{likeCount}</span>
                        </button>
                        
                        <button 
                          onClick={() => setShowComments(!showComments)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 text-academic-caption hover:bg-muted transition-colors"
                        >
                          <MessageCircle className="h-5 w-5" />
                          <span className="font-medium">Comment ({comments.length})</span>
                        </button>
                        
                        <div className="relative">
                          <button 
                            onClick={() => setShowShare(!showShare)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 text-academic-caption hover:bg-muted transition-colors"
                          >
                            <Share2 className="h-5 w-5" />
                            <span className="font-medium">Share</span>
                          </button>
                          
                          {showShare && (
                            <div className="absolute top-full left-0 mt-2 bg-white border border-border rounded-lg shadow-lg py-2 z-10 min-w-[160px]">
                              <button
                                onClick={() => handleShare('linkedin')}
                                className="w-full px-4 py-2 text-left text-sm hover:bg-muted/50 flex items-center gap-2"
                              >
                                <ExternalLink className="h-4 w-4" />
                                LinkedIn
                              </button>
                              <button
                                onClick={() => handleShare('twitter')}
                                className="w-full px-4 py-2 text-left text-sm hover:bg-muted/50 flex items-center gap-2"
                              >
                                <ExternalLink className="h-4 w-4" />
                                Twitter
                              </button>
                              <button
                                onClick={() => handleShare('reddit')}
                                className="w-full px-4 py-2 text-left text-sm hover:bg-muted/50 flex items-center gap-2"
                              >
                                <ExternalLink className="h-4 w-4" />
                                Reddit
                              </button>
                              <button
                                onClick={() => handleShare('copy')}
                                className="w-full px-4 py-2 text-left text-sm hover:bg-muted/50 flex items-center gap-2"
                              >
                                <ExternalLink className="h-4 w-4" />
                                Copy link
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Comments Section */}
                      {showComments && (
                        <div className="mt-6 space-y-4">
                          <div className="bg-muted/30 rounded-lg p-4">
                            <h4 className="font-semibold text-academic-subheading mb-3">
                              Comments ({comments.length})
                            </h4>
                            
                            {/* Comment Input */}
                            <div className="space-y-3">
                              <Textarea
                                placeholder="Write a comment..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                className="min-h-[80px]"
                              />
                              <div className="flex justify-end">
                                <Button 
                                  onClick={handleComment}
                                  disabled={!newComment.trim()}
                                  size="sm"
                                >
                                  Post Comment
                                </Button>
                              </div>
                            </div>

                            {/* Comments List */}
                            {comments.length > 0 && (
                              <div className="mt-6 space-y-4">
                                {comments.map((comment) => (
                                  <div key={comment.id} className="bg-white rounded-lg p-4 border border-border/20">
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="font-medium text-academic-subheading text-sm">
                                        {comment.author}
                                      </span>
                                      <span className="text-academic-caption text-xs">
                                        {comment.date}
                                      </span>
                                    </div>
                                    <p className="text-academic-body text-sm">
                                      {comment.text}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
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
                     {post.id === 2 ? post.title : (
                       <Link to={`/blog/${post.id}`}>
                         {post.title}
                       </Link>
                     )}
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
                     
                     {post.id === 2 ? (
                       <Button variant="ghost" size="sm" asChild>
                         <a href="https://auto.economictimes.indiatimes.com/news/commercial-vehicle/financing-the-electric-vehicle-revolution-addressing-challenges-in-india/121815514" target="_blank" rel="noopener noreferrer">
                           Read the full article on ET Auto <ExternalLink className="ml-1 h-3 w-3" />
                         </a>
                       </Button>
                     ) : (
                       <Button variant="ghost" size="sm" asChild>
                         <Link to={`/blog/${post.id}`}>
                           Read More <ArrowRight className="ml-1 h-3 w-3" />
                         </Link>
                       </Button>
                     )}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-academic-subheading mb-2">Sustainability</h3>
              <p className="text-academic-body text-sm">
                Reflections on sustainable operations and value chains, with a focus on both environmental responsibility and social impact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-academic-subheading mb-2">Industry Viewpoints</h3>
              <p className="text-academic-body text-sm">
                Commentary on industry trends, operations practices, and lessons from my professional engagements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-academic-subheading mb-2">Teaching and Academia</h3>
              <p className="text-academic-body text-sm">
                Thoughts on genZ classroom, pedagogy, academic life, and navigating the research process.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-academic-subheading mb-2">Others</h3>
              <p className="text-academic-body text-sm">
                Occasional musings on topics beyond my core expertise — from literature to personal growth and everything in between.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
