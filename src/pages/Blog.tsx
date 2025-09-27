
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, MessageCircle, Heart, Share2, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const blogPosts = [
  {
    id: 5,
    title: "Saving Tokens, Losing Courtesy? The (Plausible) Spillover of Prompt Efficiency on Human Interactions",
    excerpt: "A few days back, I was attending a session where the speaker talked about the downside of being extra polite in our input prompts while using AI agents. This got me thinking about how our increasingly optimized interactions with AI might subtly reshape our everyday manners.",
    fullContent: `
A few days back, I was attending a session where the speaker talked about the downside of being extra polite in our input prompts while using AI agents. Googling about it, I found an intriguing article on AI Katana titled "Why OpenAI Spends Millions on Your 'Please' and 'Thank You'" (<a href="https://www.aikatana.com/p/why-openai-spends-millions-on-your-please-and-thank-you" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Read here</a>). It got me thinking about how our increasingly optimized interactions with AI might subtly reshape our everyday manners – not just with machines, but with each other.

**The Cost of Courtesy in the AI Era**

Let's start with the basics: every interaction with large language models (LLMs) like those powering ChatGPT or Grok is processed in "tokens" – small units akin to word fragments. Adding polite phrases such as "please," "thank you," or "sorry" increases the token count in your prompt, which in turn ramps up computational demands. For companies building applications on these models, this translates to higher API costs, as providers charge based on tokens processed. For example, OpenAI's GPT-5 model charged $1.25/million tokens of input prompt (<a href="https://openai.com/api/pricing/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Read here about OpenAI's pricing</a>). While a single extra word is negligible, handling millions of queries at enterprise scale can add up to significant expenses, echoing the article's point about OpenAI's "tens of millions" in electricity bills from user politeness.

**Training for Brevity: The Push to Ditch Politeness**

To curb these costs, firms are likely to encourage or even train employees and users to strip away unnecessary pleasantries (e.g., Could you please give me the list of top 10 drug manufacturers in India? vs List the top 10 drug manufacturers in India). Prompt engineering guidelines already advise treating AI like a "command-line interface" rather than a colleague, avoiding fluff to preserve context and efficiency. As AI agents become ubiquitous in workplaces and more and more companies start training their employees on prompt engineering for operational efficiency, this concise, no-frills style could become the norm, prioritizing speed and savings over social niceties.

**Habit Formation in the Age of AI**

Humans are creatures of habit, and repeated behaviours wire our brains accordingly. If we're conditioned daily to interact with AI in an abrupt, utilitarian manner – omitting "please" or "thank you" for optimization, it could reinforce a more direct, less empathetic communication style. Research on moral spillover in human-AI interactions suggests that how we treat machines influences our broader ethical and social patterns, as these systems become extensions of our cognitive processes. With AI agents growing more authoritative (e.g., making decisions or providing directives), this habit loop might strengthen, normalizing curtness as efficient rather than rude.

**The Spillover Effect: From Bots to Humans**

This is where it gets concerning: what starts as cost-saving with AI could bleed into human interactions. Studies show that objectifying or depersonalized exchanges with AI can lead to harsher judgments of others or reduced empathy in real-life scenarios. For instance, if employees spend hours barking commands at chatbots, they might unconsciously carry that tone into emails, meetings, or customer calls. Over time, this "politeness erosion" could subtly degrade workplace culture or even broader social dynamics, especially among younger generations growing up with AI companions. It's not inevitable, but the psychological "seesaw effect" in AI design, balancing personality with performance, highlights how tech shapes us back.

**The Counterargument**

There are also views that politeness in AI prompts enhances response quality by mirroring human-like collaboration and improving outputs (<a href="https://www.forbes.com/sites/lanceeliot/2024/05/18/hard-evidence-that-please-and-thank-you-in-prompt-engineering-counts-when-using-generative-ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">read here</a> and <a href="https://www.forbes.com/sites/lanceeliot/2024/05/18/hard-evidence-that-please-and-thank-you-in-prompt-engineering-counts-when-using-generative-ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>). But at the end of the day, "money matters"; especially for enterprise applications used by millions of users and might be adding billions of tokens in "please" and "thank you", daily. Moreover, empirical evidence shows politeness yields inconsistent benefits, often negligible on factual queries, and can distract from core instructions, diluting prompt effectiveness without guaranteeing superior results. In cost-sensitive environments, brevity may outweigh courtesy.

However, on a personal level, we can consciously practice balanced interactions, polite enough to maintain humanity, but efficient enough to respect costs. Broader education on AI literacy could also help users understand these trade-offs, promoting designs that prioritize ethical user experiences.

**Worth Exploring**

This raises intriguing unknowns: Will generational differences amplify the spillover, with AI-native kids viewing politeness as optional? How might cultural variations (e.g., in high-context societies like Japan) resist or adapt to this trend? And if AI becomes truly sentient-like, could enforced brevity backfire, creating "resentful" systems or widening human-AI divides? 

These are just thoughts; I do not have answers to or well-thought-out opinions on any of these.

**Disclaimer:** The thoughts are personal. My knowledge of the AI ecosystem is limited; I'm drawing from articles, studies, and observations, not exhaustive expertise. I'd love to hear your thoughts, counterarguments, or additional insights in the comments. Also, I sought Grok's help to draft parts of the article.
`,
    date: "2025-09-27",
    readTime: "7 min read",
    category: "AI Ethics",
    featured: true,
    likes: 0,
    comments: 0
  },
  {
    id: 1,
    title: "The Shifting Sands of Sickness: Will Consumerization Reshape Indian Primary Healthcare?",
    excerpt: "Last month, I was attending AYUSHMAT 2025, An annual healthcare summit at IIM Bangalore. In one of the panel discussions, Mr. Vaibhav Tewari emphasized an interesting trend - the consumerization of healthcare, a shift driven by evolving patient expectations and technological advancements.",
    fullContent: `
Last month, I was attending AYUSHMAT 2025, An annual healthcare summit at IIM Bangalore. In one of the panel discussions, Mr. Vaibhav Tewari, Co-Founder & COO, Portea, was expressing his views about Indian healthcare by 2030. He emphasized an interesting trend in the industry - the consumerization of healthcare, a shift driven by evolving patient expectations and technological advancements. This got me thinking how it will revolve the role of primary care physicians – the family doctors and general physicians.

**The Enduring Pillar: Our Trusted Family Doctors**

For generations, the general physician or family doctor has been the bedrock of Indian healthcare. Remember the doctor uncle from down the lane? He wasn't just a doctor; he was a confidante, a community elder, and often the first point of contact for any ailment, big or small. When little Anya developed a persistent cough, it was Dr. uncle who, with a warm smile and a reassuring hand, would listen intently to her mother's concerns, check Anya's throat, and with his years of experience, quickly diagnosed a common cold, prescribing a simple syrup and plenty of rest. He knew Anya's family history, her allergies, even the anxiety her grandmother often felt about her health. He was the one who steered families through fevers, stitches, and childhood diseases, providing continuity of care and a sense of security that went beyond mere medical treatment.

**The Rise of Healthcare Consumer**

The "consumerization of healthcare" signifies a fundamental power shift. Patients are no longer passive recipients of care, but active participants, much like consumers in any other industry. With readily available online information, patients research symptoms, treatments, and even compare doctors and facilities. They expect convenience, accessibility, transparency in pricing, and a personalized experience, akin to the case of e-commerce or retail shopping. High out-of-pocket costs and deductibles are making patients more conscious of the "return on investment" for their healthcare spending. The rise of urgent care clinics, telehealth platforms, and specialized centers means patients have more options than ever before and are not hesitant to switch providers.

**The Urban Primary Care Physician in Transition**

This consumerization trend profoundly impacts primary care physicians, especially in urban areas. The traditional model of a single, lifelong family doctor is being challenged. Urban patients are increasingly bypassing the GPs for direct access to specialists or convenient walk-in clinics for perceived urgent needs.

This can lead to fragmented care, where a patient might see multiple specialists without a central coordinator, potentially leading to duplicate tests, conflicting advice, and a lack of holistic understanding of their overall health. Primary care physicians in cities are now under pressure to offer greater convenience, emphasize patient experience, and demonstrate value.

**The Rise of AI Agents and the Empowered Patient**

Adding another layer to this dynamic is the emergence of new AI agents. The likes of ChatGPTs are empowering patients and their families to take on a more active role in their health management, even stepping into a "primary care provider" role to some extent.

Imagine a busy parent, concerned about their child's sudden fever at midnight. Instead of a frantic online search or a visit to an emergency room for a non-critical issue, they can interact with an AI-powered symptom checker that asks relevant questions, analyze the child's symptoms against vast medical databases, and provide initial guidance – perhaps suggesting home remedies, advising on when to seek professional help, or even facilitating a teleconsultation with a doctor. Similarly, AI-powered health apps can help individuals track chronic conditions, remind them about medication, and offer personalized wellness advice, enabling a degree of self-care and proactive health management.

**The Future of Primary Care: A Dual Trajectory**

Looking towards 2030, the role of primary care in India will likely follow a dual trajectory.

In urban areas, primary care physicians will evolve into highly accessible, tech-enabled "health navigators" and "wellness coaches." Their emphasis will shift from solely reactive treatment to proactive health management, preventive care, and personalized health journeys. They will also leverage AI tools to streamline administrative tasks, analyze patient data for predictive insights, and facilitate seamless referrals to specialists when truly needed. The human element of trust and empathy will remain paramount, but it will be complemented by digital convenience and data-driven insights. Direct primary care models, where patients pay a subscription fee for unlimited access to their doctor (e.g., MediBuddy gold subscription), might gain further traction, fostering deeper patient-physician relationships.

However, in rural areas and Tier-3 cities, the role of primary care physicians may not see as drastic a shift in its fundamental nature. While technology will undoubtedly play a role in improving access to information and remote consultations, the traditional "Dr. uncle" model, built on community trust, local understanding, and personal relationships, will likely retain its core importance. Here, the challenge will be more about bolstering existing infrastructure, addressing physician shortages, and leveraging basic digital tools to extend reach and provide foundational healthcare services.

The consumerization of healthcare, while a significant disruptor, ultimately holds the promise of a more engaged, informed, and empowered patient. The primary care physician, whether in a bustling city clinic or a quiet village health center, will continue to be vital, adapting their role to navigate this evolving landscape and ensuring that the heart of healthcare –personalized, accessible human touch, remains beating strong.
`,
    date: "2025-08-02",
    readTime: "8 min read",
    category: "Healthcare",
    featured: false,
    likes: 2,
    comments: 0
  },
  {
    id: 2,
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

**Additional References**

Floridi, L., Cowls, J., Beltrametti, M., Chatila, R., Chazerand, P., Dignum, V., Luetge, C., Madelin, R., Pagallo, U., Rossi, F., Schafer, B., Valcke, P., & Vayena, E. (2018). AI4People – An Ethical Framework for a Good AI Society: Opportunities, Risks, Principles, and Recommendations. Minds and Machines, 28(4), 689-707.

Mittelstadt, B. D., Allo, P., Taddeo, M., Wachter, S., & Floridi, L. (2016). The ethics of algorithms: Mapping the debate. Big Data &Amp; Society, 3(2), 205395171667967.

Vinuesa, R., Azizpour, H., Leite, I., Balaam, M., Dignum, V., Domisch, S., Felländer, A., Langhans, S. D., Tegmark, M., & Fuso Nerini, F. (2020). The role of artificial intelligence in achieving the Sustainable Development Goals. Nature Communications, 11(1).

Gurumurthy, A. and Bharthur, D., Democracy and the algorithmic turn, SUR 27 (2018), accessed March 24, 2025, https://sur.conectas.org/en/democracy-and-the-algorithmic-turn.`,
    date: "2025-07-01",
    readTime: "12 min read",
    category: "Social sustainability",
    featured: false,
    likes: 3,
    comments: 0
  },
    {
    id: 3,
    title: "Financing the Electric Vehicle Revolution in India",
    excerpt: "A short reflection on my recent article in ET Auto (published on Jun 13, 2025), co-authored with Prof. Sreelata Jonnalagedda, highlighting the financing challenges and emerging solutions for commercial EV adoption in India.",
    date: "2025-06-13",
    readTime: "3 min read",
    category: "EV",
    featured: false,
    likes: 3,
    comments: 0
  },
  {
    id: 4,
    title: "Why Leasing Dominates India's Commercial EV Market",
    excerpt: "In this opinion piece for Autocar Professional, co-authored with Prof. Sreelata Jonnalagedda, we explore why leasing has emerged as the dominant mode of adoption for commercial EVs in India — highlighting financing barriers, battery-related risks, and evolving business models in the electric mobility space.",
    date: "2025-06-07",
    readTime: "4 min read",
    category: "EV",
    featured: false,
    likes: 5,
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
  const [expandedPost, setExpandedPost] = useState(null);

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
          <div className="mt-8 max-w-4xl mx-auto">
            <p className="text-sm text-academic-body/80 italic border-l-2 border-academic-primary/30 pl-4 py-2 bg-academic-primary/5 rounded-r-md">
              <strong>Disclaimer:</strong> The views expressed here are my own and do not reflect the views of any institution or organization I am affiliated with.
            </p>
          </div>
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
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                          >
                            {expandedPost === post.id ? 'Show Less' : 'Read More'} 
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        ) : post.id === 3 ? (
                          <Button variant="ghost" size="sm" asChild>
                            <a href="https://auto.economictimes.indiatimes.com/news/commercial-vehicle/financing-the-electric-vehicle-revolution-addressing-challenges-in-india/121815514" target="_blank" rel="noopener noreferrer">
                              Read more on ET Auto <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        ) : post.id === 4 ? (
                          <Button variant="ghost" size="sm" asChild>
                            <a href="https://www.autocarpro.in/opinion-blogs/why-leasing-dominates-indias-commercial-ev-market-126883" target="_blank" rel="noopener noreferrer">
                              Read more on Autocar Professional <ExternalLink className="ml-1 h-3 w-3" />
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
                    
                    {/* Full content for AI Sustainability post */}
                    {post.id === 2 && expandedPost === post.id && (
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="prose prose-lg max-w-none text-academic-body">
                          <div className="whitespace-pre-wrap">
                            {post.fullContent}
                          </div>
                        </div>
                      </div>
                    )}
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
