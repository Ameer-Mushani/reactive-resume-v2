//Stores information on my portfolio
//gets parsed into react components
const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Flappy Brain',
      description:
        'Implementation of the NEAT genetic algorithm in JavaScript. Uses evolution to learn to play Flappy Bird.',
      stack: ['Javascript', 'p5.js', 'NEAT'],
      sourceCode: 'https://github.com/Ameer-Mushani/flappy-brain',
      livePreview: 'https://ameer-mushani.github.io/flappy-brain/',
    },
    {
      name: 'Spikes',
      description:
        'Fully playable game developed with object oriented concepts. Implements custom physics and collision detection.',
      stack: ['OOP', 'Physics', 'Collision Detection'],
      sourceCode: 'https://github.com/Ameer-Mushani/spikes',
      livePreview: 'https://ameer-mushani.github.io/spikes/',
    },
    {
      name: 'MyShell',
      description:
        'Bash shell built from scratch in C. Implements basic commands such as ls, cd, pwd, and more. Supports background processes and piping',
      stack: ['C', 'Linux', 'Multi-threading'],
      sourceCode: 'https://github.com/Ameer-Mushani/myShell',
    },
  ];
const resume = [
   {
      title: 'Machine Vision and Robotics Research Assitant',
      type: 'work',
      subtitle: 'University of Guelph, Robotics Institute',
      date: 'May 2022 - August 2022',
      description: 'Developed a full stack project to display data collected by one of the lab\'s robots. Over a four month period I developed a display for parameterized statistics on a Leaflet map, FastAPI endpoints connected to a SQL database and deployed the entire project to AWS.',
      stack: ['Vue.js', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS EC2 & Amplify'],
      image: 'robotics_institute_logo.png',
      report: "/robotics_institute",
   },
   {
      title: 'Full Stack Developer Intern',
      type: 'work',
      subtitle: 'Competers Inc, Guelph',
      date: 'June 2021 - December 2021',
      description: 'Worked on all aspects of our stacks to provide software with consitent uptime and improvements to over 500+ daily users. Wrote modular functions for a main program Utilocate, developed a pages in Angular connected to AWS endpoints to interface with our MySQL databse for authentication and user management.',
      stack: ['VB.NET', 'Angular', 'MySQL', 'AWS Lambda', 'Typescript'],
      image: 'competers_logo.png',
      report: "/competers",
   },
   {
      title: 'Bachelor of Computing in Software Engineering',
      type: 'education',
      subtitle: 'University of Guelph',
      date: 'September 2019 - Present',
      description: 'Throughout my time at the University of Guelph, I have gained experience in a wide range of technologies. I have also gained practical expereince by taking several courses involving software development in an agile environment.',
      stack: ['Data Structures', 'Algorithms', 'Agile Development', 'C', 'Java'],
      image: "uofg-logo.png",
      report: false,
   },
   {
      title: 'Forest Height Collegiate Insitute',
      type: 'education',
      subtitle: '',
      date: 'September 2015 - June 2019',
      description: 'In high school I started my developer journey by learning to code in Processing, a subset of Java. I learned the pillars of OOP by designing games with modular classes and finished my grade 12 year by devloping an Android app. \n\n I was the valedictorian of my high school class and gave a speech to over 500 students and parents.',
      stack: [],
      image: 'mepog.jpg',
      report: false,
   }
];
const competers = 
   {
      key: 0,
      company: 'Competers Inc',
      position: 'Full Stack Developer Intern',
      date: 'June 2021 - December 2021',
      description: "Competers is an IT company that provides enterprise software solutions to utility locating and excavating companies in the public and private sectors. Competers' clients include almost all major municipalities in Ontario and several industry leaders from across Canada and the USA. Our main products were our Windows and Android applications for utility locators as well as managment software for excavating companies. Additionally web portals were created for an easier aveneue to access their data.\n\n Despite having such a wide variety of clients, Competers is a relatively small company in terms of workforce. The entire company is comprised of less than fifteen people. In terms of my job that meant that I had to wear a variety of hats, and quite often. I got involved in many things, I did regular maintaince updates for our windows software, wrote custom SQL queries for our clients, and worked in an Angular web environment to name a few. One intersting aspect of my role was that due to our large user base, we often had to take calls to provide support to users. I got quite proficient at being able to quickly identify issues that users will have as well worked on customer interaction skills. For an example of work that I performed you can visit the u4ia.cloud site and see the login page I created. Although the page itself is quite simple, developing the backend using proper authentication was defeinetly a learning experience for me.\n\n My main goals at Competers were to further expand my skills as a programmer in a professional environment. I wanted to work on development skills not just in a programming sense but also my technical communication.\n\n My goals for the first 4 months were:\n- To become more proficient in SQL database frameworks\n- To improve my code documentation skills\n- Improve oral commuincation in reagrds to technical topics. \n\n Going into this job I knew very little about SQL and how to properly write lengthy multi-faceted queries, but through repeated attempts and feedback from other developers I was able to increase my skills exponentially. Furthermore, my skills in documentation were immediatly heightened jsut by reading through the vast library of documentation we had at Competers. Since our software has been deployed for over 10 years now, have strong documentation was a necessary skill that I developed through writing new documents as well as contributing to older ones when new functionality was added. In terms of oral communication, despite being online I was able to improve in this area. Each day we had a breif morning and afternoon stand up meeting, by attending these regularly I was able to incrementally increase my ability to discuss technical topics with other developers in a concise manner. \n\nFor my second 4 month term my goals were as follows:\n- To manage multiple ongoing tasks and their deadlines effectively\n- To further my understanding of Full Stack projects and how the individual parts interact\n- Communicate effectively with customers in terms of requirements gathering and expressing the developed work\n\n Working on deadlines has always been something I have struggled with in my univeersity life, but when clients have hard deadlines there is no way around it and over the course of 8 months I greatly improved my ability to manage time. Addtionally when working in a full stack environment I learned how important it is to coordinate with other devlopers, it wasn't uncommon for me to be developing one side of a project and another developer working on a completely differnt section. Together we would have to manage our deadlines and leave enough room for end to end testing. Fianally, beacuse I was developing software that was requested by clients, my ability to express technical concepts to a non-technical audience greatly improved as a result. The second half od my work term gave me valuable insight into the real working environment which I hadn't experienced yet in my courses.\n\n Overall, I learned so much more than I could ever summarize here and this knowledge will stick with me for the rest of my career. As my first coop experience I am delighted with the improvements I made as well as the people I met. I would like to personally acknowledge Shuaib Solker and Greg Hart. They both inspired me to become a better developer in all aspects and gave me advice whenever I needed. I would also like to thank Laura Gatto and Kate McRoberts who enabled me to get my interview at Competers, I would not have had the wonderful experience without them.",
   };
export { projects, resume, competers };