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
   },
   {
      title: 'Full Stack Developer Intern',
      type: 'work',
      subtitle: 'Competers Inc, Guelph',
      date: 'June 2020 - December 2020',
      description: 'Worked on all aspects of our stacks to provide software with consitent uptime and improvements to over 500+ daily users. Wrote modular functions for a main program Utilocate, developed a pages in Angular connected to AWS endpoints to interface with our MySQL databse for authentication and user management.',
      stack: ['VB.NET', 'Angular', 'MySQL', 'AWS Lambda', 'Typescript'],
      image: 'competers_logo.png',
   },
   {
      title: 'Bachelor of Computing in Software Engineering',
      type: 'education',
      subtitle: 'University of Guelph',
      date: 'September 2019 - Present',
      description: 'Throughout my time at the University of Guelph, I have gained experience in a wide range of technologies. I have also gained practical expereince by taking several courses involving software development in an agile environment.',
      stack: ['Data Structures', 'Algorithms', 'Agile Development', 'C', 'Java'],
      image: "uofg-logo.png",
   },
   {
      title: 'Forest Height Collegiate Insitute',
      type: 'education',
      subtitle: '',
      date: 'September 2015 - June 2019',
      description: 'In high school I started my developer journey by learning to code in Processing, a subset of Java. I learned the pillars of OOP by designing games with modular classes and finished my grade 12 year by devloping an Android app. \n\n I was the valedictorian of my high school class and gave a speech to over 500 students and parents.',
      stack: [],
      image: 'mepog.jpg'
   }
]
  export { projects, resume }