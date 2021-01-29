// 17 Tech Interview Questions
// Portffolio -- i4
//
// Data from RH url('https://www.roberthalf.com/blog/how-to-interview-candidates/7-must-ask-tech-interview-questions')

const questions = [
    {
      id: 1,
      title: 'What online resources do you use to help you do your job?',
      info:
        'Most IT workers turn to websites such as StackExchange or Github when they need help with something. Serious professionals will have their own selection of websites, online communities, social media feeds and other resources specific to their interests. The answer to this question will give you an indication of how engaged the candidate is with the broader IT world.',
    },
    {
      id: 2,
      title: 'How do you keep your technology skills current?',
      info:
        'Tech professionals work hard to keep their knowledge base current by reading blogs and forums, taking online courses, joining hackathons and plugging away at personal IT projects. This tech interview question can help you gauge the candidate’s enthusiasm for the profession, as well as open up a conversation about professional development.',
    },
    {
      id: 3,
      title: 'Pretend I’m not a tech person. Can you explain [a relevant technology] in simple terms?',
      info:
        'IT plays a crucial role in almost every company, so the ability to communicate with non-technical people is a must. You can assess candidates’ communication skills with this IT interview question. Do they avoid obscure acronyms and jargon? How well can they break down a complicated process? Try asking a few “dumb” follow-up questions to get a sense of how they’d interact with non-tech colleagues.',
    },
    {
      id: 4,
      title: 'What strengths do you think are most important in a developer [or another relevant IT position]?',
      info:
        'A question like this can reveal how the interviewee feels about the position and what they think they would bring to it. Some candidates may focus on technical abilities and IT certifications, while others may talk more about problem solving, attention to detail, communication and other general job skills. Look for IT candidates who give a balanced answer. ',
    },
    {
      id: 5,
      title: 'What three words would your colleagues use to describe you?',
      info:
        'The answer can clue you in to a candidate’s personality trait that may not be readily apparent through their resume or traditional interview questions. It also gives insight into how the individual perceives themselves and the role they’re applying for. For example, if their answer focuses on their creative side but the position is very analytical in nature, the job may not be a good fit.',
    },
    {
        id: 6,
        title: 'Can you tell me about a time when things didn’t go the way you wanted at work, such as a project that failed or being passed over for a promotion?',
        info:
          'Everyone deals with professional setbacks at some point in their career. What you want to know is how people handled — and what they learned from — those situations. The best employees are resilient, using setbacks as a springboard toward positive changes. So listen to not only the problem they mention, but also what they did after the disappointment.',
      },
      {
        id: 7,
        title: 'What are your favorite and least favorite technology products, and why?',
        info:
          'In addition to learning whether prospective employees like the hardware, operating system and software your company uses, this tech interview question helps you evaluate enthusiasm and knowledge. Do candidates become animated when discussing the advantages and disadvantages of certain tools? Do they admire solid engineering, sleek design, intuitive user experience or another aspect of good technology? ',
      },
      {
        id: 8,
        title: 'What are the benefits and the drawbacks of working in an Agile environment?',
        info:
          'Most IT teams have adopted some form of Agile — currently the favored SDLC methodology — which means lots of quick meetings and a steady stream of feedback from fellow team members. A candidate’s answer to this IT question can tell you not only their level of understanding of this popular environment, but also their attitudes toward collaboration and communication.',
      },
      {
        id: 9,
        title: 'How do you think further technology advances will impact your job?',
        info:
          'Advances in technologies continue to change most IT roles. How aware of that is the candidate you’re interviewing? Do they know, for example, that automated testing is a major part of DevOps, which allows for faster development cycles and quicker deployment? A candidate may talk about the automation tools they use or the challenges of working with machine learning and big data. They may also discuss AI projects they hope to work on. This question is a good way to start a conversation about trends and advancements in the field, and it will also give you insight into how the candidate perceives their role over the long term.',
      },
      {
        id: 10,
        title: 'Tell me about a tech project you’ve worked on in your spare time.',
        info:
          'You want to hire an IT professional who devotes their personal time to side projects. Why? These are people who are driven and curious, which, in turn, keeps their skill set fresh. Ask how they stay motivated, what interests them about the project and what their ultimate goal is. If they can demo a website or app they’ve built, all the better.',
      },
      {
        id: 11,
        title: 'What was the last presentation you gave?',
        info:
          'Today’s tech workers can’t be lone wolves. They have to discuss changes with teammates, coordinate with other departments, advocate for platforms they prefer and much more. While not everyone has to love public speaking, your new hire should be able to conduct research, put together a solid presentation and persuade stakeholders why X is better than Y.',
      },
      {
        id: 12,
        title: 'What are the qualities of a successful team or project leader?',
        info:
          'Always be on the lookout for leaders, even when you’re not hiring for a management position. The nature of IT work means individuals will frequently have to take responsibility for delivering projects, and this requires leadership skills such as organization, motivation, positivity, delegation and communication.',
      },
      {
        id: 13,
        title: 'What skills or characteristics make someone an effective remote worker? ',
        info:
          'This is an important question to ask given the ongoing impact of the COVID-19 pandemic. Remote workers must be self-starters who are able to work with little supervision. They need excellent communication abilities as well as self-discipline and stellar time-management skills. Not everyone has those qualities, and not everyone thrives working outside an office. You want to be sure your new hire will be both productive and comfortable if working off-site. ',
      },
      {
        id: 14,
        title: 'What would you hope to achieve in the first six months after being hired?',
        info:
          'The answer to this tech interview question depends on the role. A developer, for example, may hope to have developed a small project during that time, while a tech manager may want to have analyzed internal processes. A candidate’s response will give you insights into their overall understanding of the position. If their goals and ambitions don’t match the job description, this may not be the right position for them.',
      },
      {
        id: 15,
        title: 'How do you handle tight deadlines?',
        info:
          'IT teams often face daunting time constraints. You need someone who can work efficiently and accurately when under pressure. Ask this interview question of a potential employee and you’ll at least get a sense of how they deal with stress and whether they can keep up with the pace of projects at your company. You could also follow up by asking if they’ve ever missed a deadline and, if so, how they dealt with the situation.',
      },
      {
        id: 16,
        title: 'How do you manage your work-life balance?',
        info:
          'With on-call duties and multiple pressing deadlines, some tech workers struggle with the always-on, workaholic culture of this field. While you want dedicated team members, you should also seek employees who know how to relax and take care of themselves. Burnout is a very real problem in IT, and top performers have good strategies in place to prevent that. As a follow up to their answer, you could talk about how your company supports a healthy work-life balance — something that can be very tempting for candidates with multiple offers.',
      },
      {
        id: 17,
        title: 'Why do you want to work for us?',
        info:
          'Individuals who truly want the job will have done their research and be able to talk about your company’s values, products and services, and approach to technology. If they can’t articulate at least a few reasons your company would be a good match for their skills and ambitions, then they haven’t done their due diligence to properly prepare for the interview.\n\n Remember to allow time at the end of the interview for candidates to ask you questions. This is not only beneficial to applicants — it also clues you in to what matters to them. For instance, you may reconsider your interest in a prospect if they seem overly concerned about salary and vacation accrual during the first interview. Or you may be impressed when someone asks questions that demonstrate their business acumen and thorough understanding of your company’s strengths and weaknesses.',
      },
  ]

  export default questions;