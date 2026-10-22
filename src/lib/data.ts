export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: number
  category: string
  image?: string
}

const blogPosts: BlogPost[] = [
  {
    id: "mastering-job-interviews",
    title: "Mastering Job Interviews: 10 Essential Tips for Success",
    excerpt: "Learn the key strategies to ace your next job interview and land your dream position with confidence.",
    content: `
      <p>Job interviews can be nerve-wracking, but with the right preparation and mindset, you can turn them into opportunities to shine. Here are 10 essential tips to help you master your next interview:</p>
      
      <h2>1. Research the Company Thoroughly</h2>
      <p>Before your interview, spend time researching the company's mission, values, recent news, and culture. This knowledge will help you tailor your responses and show genuine interest in the organization.</p>
      
      <h2>2. Practice Common Interview Questions</h2>
      <p>Prepare answers for common questions like "Tell me about yourself," "Why do you want this job?" and "What are your strengths and weaknesses?" Practice your responses out loud to build confidence.</p>
      
      <h2>3. Prepare Your Own Questions</h2>
      <p>Always have thoughtful questions ready to ask your interviewer. This shows engagement and helps you evaluate if the role is right for you.</p>
      
      <h2>4. Dress Appropriately</h2>
      <p>Choose professional attire that aligns with the company culture. When in doubt, it's better to be slightly overdressed than underdressed.</p>
      
      <h2>5. Arrive Early</h2>
      <p>Plan to arrive 10-15 minutes before your scheduled interview time. This shows punctuality and gives you time to compose yourself.</p>
      
      <h2>6. Use the STAR Method</h2>
      <p>When answering behavioral questions, use the STAR method (Situation, Task, Action, Result) to structure your responses clearly and effectively.</p>
      
      <h2>7. Show Enthusiasm</h2>
      <p>Let your genuine interest in the role and company shine through. Enthusiasm is contagious and can set you apart from other candidates.</p>
      
      <h2>8. Listen Actively</h2>
      <p>Pay close attention to what your interviewer is saying. This helps you provide relevant responses and shows respect for their time.</p>
      
      <h2>9. Follow Up</h2>
      <p>Send a thank-you email within 24 hours of your interview. This reinforces your interest and keeps you top of mind.</p>
      
      <h2>10. Learn from Each Experience</h2>
      <p>Whether you get the job or not, reflect on each interview experience to identify areas for improvement.</p>
      
      <p>Remember, interviews are a two-way street. While the company is evaluating you, you're also evaluating them. Stay confident, be authentic, and let your personality shine through!</p>
    `,
    author: "Sarah Johnson",
    publishedAt: "January 15, 2025",
    readTime: 8,
    category: "Interview Tips",
    image: "/placeholder.svg?height=400&width=800&text=Job Interview Tips",
  },
  {
    id: "remote-work-productivity",
    title: "Remote Work Productivity: Creating Your Perfect Home Office",
    excerpt: "Discover how to set up an efficient home office and maintain productivity while working remotely.",
    content: `
      <p>Working from home has become the new normal for many professionals. Creating an effective home office setup is crucial for maintaining productivity and work-life balance. Here's your comprehensive guide to building the perfect remote work environment:</p>
      
      <h2>Choosing the Right Space</h2>
      <p>Select a dedicated area in your home that can serve as your office. Ideally, this should be a quiet space with minimal distractions and good natural light.</p>
      
      <h2>Essential Equipment</h2>
      <ul>
        <li>A comfortable, ergonomic chair</li>
        <li>A proper desk at the right height</li>
        <li>Good lighting (natural light plus a desk lamp)</li>
        <li>Reliable internet connection</li>
        <li>Quality headphones or speakers</li>
      </ul>
      
      <h2>Establishing Boundaries</h2>
      <p>Set clear boundaries between work and personal time. Create a routine that signals the start and end of your workday.</p>
      
      <h2>Staying Connected</h2>
      <p>Regular communication with colleagues is essential. Use video calls, instant messaging, and collaboration tools to stay connected with your team.</p>
      
      <p>Remember, the key to successful remote work is finding what works best for you and being consistent with your approach.</p>
    `,
    author: "Michael Chen",
    publishedAt: "January 12, 2025",
    readTime: 6,
    category: "Remote Work",
    image: "/placeholder.svg?height=400&width=800&text=Home Office Setup",
  },
  {
    id: "career-change-guide",
    title: "Making a Career Change: A Step-by-Step Guide",
    excerpt: "Navigate your career transition successfully with this comprehensive guide to changing careers.",
    content: `
      <p>Changing careers can be both exciting and daunting. Whether you're seeking better work-life balance, higher compensation, or simply following your passion, a strategic approach will increase your chances of success.</p>
      
      <h2>Self-Assessment</h2>
      <p>Start by evaluating your skills, interests, and values. What do you enjoy doing? What are you naturally good at? What matters most to you in a career?</p>
      
      <h2>Research Your Target Industry</h2>
      <p>Thoroughly research the industry you want to enter. Understand the job market, required skills, typical career paths, and compensation ranges.</p>
      
      <h2>Identify Skill Gaps</h2>
      <p>Compare your current skills with what's required in your target field. Create a plan to bridge any gaps through education, training, or volunteer work.</p>
      
      <h2>Network Strategically</h2>
      <p>Connect with professionals in your target industry. Attend industry events, join professional associations, and leverage LinkedIn to build relationships.</p>
      
      <h2>Create a Transition Plan</h2>
      <p>Develop a timeline for your career change. Consider whether you'll make a gradual transition or a complete career pivot.</p>
      
      <p>Remember, career changes take time and patience. Stay focused on your goals and be prepared to adapt your strategy as you learn more about your new field.</p>
    `,
    author: "Emily Rodriguez",
    publishedAt: "January 10, 2025",
    readTime: 7,
    category: "Career Development",
    image: "/placeholder.svg?height=400&width=800&text=Career Change",
  },
  {
    id: "networking-strategies",
    title: "Professional Networking: Building Meaningful Connections",
    excerpt:
      "Learn effective networking strategies to build valuable professional relationships and advance your career.",
    content: `
      <p>Professional networking is one of the most powerful tools for career advancement. It's not just about collecting business cards – it's about building genuine, mutually beneficial relationships.</p>
      
      <h2>Start with Your Existing Network</h2>
      <p>Your network already includes colleagues, classmates, friends, and family. Let them know about your career goals and ask for introductions to relevant contacts.</p>
      
      <h2>Attend Industry Events</h2>
      <p>Conferences, workshops, and meetups are excellent opportunities to meet like-minded professionals. Come prepared with a brief introduction about yourself.</p>
      
      <h2>Leverage Social Media</h2>
      <p>LinkedIn is particularly valuable for professional networking. Share industry insights, comment on posts, and reach out to new connections with personalized messages.</p>
      
      <h2>Give Before You Receive</h2>
      <p>Look for ways to help others in your network. Share job opportunities, make introductions, or offer your expertise. This builds goodwill and strengthens relationships.</p>
      
      <h2>Follow Up Consistently</h2>
      <p>After meeting someone new, follow up within a few days. Send a personalized message referencing your conversation and suggest ways to stay in touch.</p>
      
      <p>Remember, networking is a long-term investment. Focus on building authentic relationships rather than just trying to get something from others.</p>
    `,
    author: "David Park",
    publishedAt: "January 8, 2025",
    readTime: 5,
    category: "Networking",
    image: "/placeholder.svg?height=400&width=800&text=Professional Networking",
  },
  {
    id: "resume-writing-tips",
    title: "Resume Writing in 2025: Modern Best Practices",
    excerpt: "Update your resume with the latest best practices and stand out in today's competitive job market.",
    content: `
      <p>Your resume is often the first impression you make on potential employers. In 2025, certain trends and best practices can help your resume stand out from the crowd.</p>
      
      <h2>Keep It Concise and Relevant</h2>
      <p>Aim for 1-2 pages maximum. Focus on experiences and achievements that are most relevant to the job you're applying for.</p>
      
      <h2>Use Action Verbs and Quantify Results</h2>
      <p>Start bullet points with strong action verbs and include specific numbers, percentages, or dollar amounts to demonstrate your impact.</p>
      
      <h2>Optimize for ATS</h2>
      <p>Many companies use Applicant Tracking Systems (ATS) to screen resumes. Use standard section headings and include relevant keywords from the job description.</p>
      
      <h2>Include a Professional Summary</h2>
      <p>Replace the outdated objective statement with a compelling professional summary that highlights your key qualifications and career goals.</p>
      
      <h2>Highlight Technical Skills</h2>
      <p>Create a dedicated skills section that lists relevant technical skills, software proficiencies, and certifications.</p>
      
      <h2>Proofread Carefully</h2>
      <p>Spelling and grammar errors can immediately disqualify your application. Proofread multiple times and consider having someone else review your resume.</p>
      
      <p>Remember to tailor your resume for each application, highlighting the most relevant experiences and skills for each specific role.</p>
    `,
    author: "Lisa Thompson",
    publishedAt: "January 5, 2025",
    readTime: 6,
    category: "Resume Tips",
    image: "/placeholder.svg?height=400&width=800&text=Resume Writing",
  },
  {
    id: "salary-negotiation",
    title: "Salary Negotiation: Getting What You're Worth",
    excerpt: "Master the art of salary negotiation with proven strategies to secure better compensation packages.",
    content: `
      <p>Salary negotiation is a crucial skill that can significantly impact your lifetime earnings. Many professionals leave money on the table simply because they don't negotiate effectively.</p>
      
      <h2>Do Your Research</h2>
      <p>Before any negotiation, research salary ranges for your role in your geographic area. Use resources like Glassdoor, PayScale, and industry reports.</p>
      
      <h2>Know Your Value</h2>
      <p>Prepare a list of your accomplishments, skills, and the value you bring to the organization. Quantify your contributions whenever possible.</p>
      
      <h2>Consider the Total Package</h2>
      <p>Salary is just one component. Consider benefits, vacation time, flexible work arrangements, professional development opportunities, and other perks.</p>
      
      <h2>Time It Right</h2>
      <p>The best time to negotiate is after you've received a job offer but before you've accepted it. For current employees, performance review periods are ideal.</p>
      
      <h2>Practice Your Pitch</h2>
      <p>Rehearse your negotiation conversation. Be confident but not aggressive, and always maintain a professional tone.</p>
      
      <h2>Be Prepared to Walk Away</h2>
      <p>Know your minimum acceptable offer and be prepared to decline if the employer can't meet your requirements.</p>
      
      <p>Remember, negotiation is a normal part of the hiring process. Most employers expect it and respect candidates who advocate for themselves professionally.</p>
    `,
    author: "Robert Kim",
    publishedAt: "January 3, 2025",
    readTime: 7,
    category: "Salary & Benefits",
    image: "/placeholder.svg?height=400&width=800&text=Salary Negotiation",
  },
]

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return blogPosts
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return blogPosts.find((post) => post.id === id) || null
}
