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
        name: 'DJ Z',
        description:
            'Discord bot developed in Python capable of playing a YouTube video via URL. Uses Discord\'s application commands API. ',
        stack: ['Python', 'Discord.py', 'Dicord Developer API'],
        sourceCode: 'https://github.com/Ameer-Mushani/DJZ',
        livePreview: 'https://medium.com/stackademic/how-to-create-a-music-bot-using-discord-py-and-slash-commands-e3c0a0f92e53',
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
        title: 'Cloud Orchestration Developer',
        type: 'work',
        subtitle: 'SAP, Waterloo',
        date: 'January - August 2023',
        description: 'Worked on SAP HANA Datalake a cloud based data storage solution. Developed and maintained on cloud operators written in Python and deployed to Kubernetes. Each operator was in charge of managing the lifecycle and uptime of various Kuberentes resources.',
        stack: ['Kubernetes', 'Python', 'Shell Scripting', 'Prometheues & Grafana', 'Linux'],
        image: 'sap-logo.png',
        report: '/sap'
    },
    {
        title: 'Machine Vision and Robotics Research Assitant',
        type: 'work',
        subtitle: 'University of Guelph, Robotics Institute',
        date: 'May 2022 - August 2022',
        description: 'Developed a full stack project to display data collected by one of the lab\'s robots. Over a four month period I developed a display for parameterized statistics on a Leaflet map, FastAPI endpoints connected to a SQL database and deployed the entire project to AWS.',
        stack: ['Vue.js', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS EC2 & Amplify'],
        image: 'robotics_institute_logo.png',
        report: "/robotics",
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
const robotics =
{
    key: 1,
    company: 'Robotics Institute',
    position: 'Machine Vision and Robotics Reasearch Assitant',
    date: 'May 2022 - August 2022',
    description: `The University of Guelph Robotics Institute is an on-campus lab centred around researching and developing robotic systems to improve our quality of life through fully-fledged robotics systems. The Robotics Institute performs research to improve existing commercial systems and positively impact the lives of others. 

   Starting my journey at the Robotics Institute I was tasked with being the sole developer continuing development on our client-facing aspect of the Digital Nursery project. The Digital Nursery project primarily involves a robot that is wheeled through a nursery and collects images and various data on the saplings. My assignment during my four-month stint was to improve on the existing Full Stack project and get it ready to present to possible clients.  The project involved a SQLite database, an API developed in Python with FastAPI and SQLAlchemy, and a front-end built using Nuxt.js (Vue.js). Additionally, each section of the project was run in a docker container. 
   
   This being my 3rd Coop term and also the added responsibility of being alone on the project for the summer I made sure to set solid goals to develop my overall skills as a developer. Both technical and non-technical.
   
   -My first goal was to learn and develop skills in unfamiliar frameworks, namely Nuxt.js and FastAPI.
   -Next, I wished to improve my skills with Git to improve the software development lifecycle and improve readability for future devs
   -Finally, as this was my first fully in-person co-op my last goal was to create and maintain a consistent schedule of work
   
   First arriving at my job unfamiliar technologies were all around me, Ubuntu desktops, docker containers, and Vue.js were all things I didn’t have first-hand experience in. But throughout my first month, I was able to learn how to be proficient in all technologies. I did a large portion of research on how to set up dependencies and develop efficiently, although this was difficult at the start it was rewarding as I truly felt like I understood all the ins and outs of what I was doing. 
   
   I’d say one of the things I performed the best at was using Git and all of its features as well as creating useful documentation for future developers. During the 4-month period I was at the Robotics Institute there were no past developers who worked on the Digital Nursery projects that I could ask questions. So I was forced to spend time reading various complex sections of code. Keeping this in mind, I assured my code was clearly commented, my commits were concise yet informative, and I used the issues feature on Gitlab to document development progress. I believe I achieved in creating a healthy environment for the next developer on this project.
   
   My final goal this work term was to maintain a consistent work schedule, as my previous months of the coop were all online and it was easier to adapt the work day to suit my needs. This time I aimed to always be at the office at a consistent time each day and work minimally from home. For the most part, I exceeded in this goal and I found that my productivity for both in the office and on work-from-home days increased. For the future, I think I would prefer a job that offers me a mix of both in office work and work-from-home. 
   
   Overall, I truly enjoyed my time at the Robotics Institute and I am grateful for the opportunity to grow as a developer and make an impact on a tangible project. I would like to thank my supervisor Cole Tarry, and Dr. Medhat Moussa for allowing me to succeed in the role. I would also like to thank a fellow student who worked alongside me in the Robotics Institute, Julius Kapeniak, who provided me with meaningful career advice. 
   
   
   
   `
};
const SAP =
{
    key: 2,
    company: "SAP",
    position: "Cloud Orchestration Developer",
    date: "January - August 2023",
    description: `SAP is the world largest enterprise resource planning software distributor and the world largest non-American software company by revenue. The Waterloo office, which I worked in, specializing in devloping SAP HANA Cloud. This is SAP's flagship data storage solution for businesses of all sizes. Across Canada SAP has many offices but the Waterloo location was designated as an "SAP Lab" which means it is solely focused on development. I also had the pleasure of working in the beatutiful newly rennovated office not far from the University of Waterloo campus.  
     
    One of the products we work on at the Waterloo office is SAP HANA Datalake. This software allowed businsess to store and acess large quantities of files with assurance of greater than 98% uptime. These files were stored in various regions using the cloud providers such as AWS, Azure, Google Cloud for physical server space. To ensure Datlakes are always accessible we deploy our platform using Kubernetes, this allows for automatic restarts of various dockerized containers when they run into an issue.

    The team I joined was the Hana Datalake Landscape Services Team, whose main responsibility was to edit and maintain various Kuberentes resources defined in YAML files. This was a completely new field of learning for me as not only was this my first venture into Kubernetes but also learning how to write code that operates on continously on live resources is a different skillset that I haven't used in my previous coops.

    This being my final Co-op work term before I graduate I made sure to set solid goals to further elevate my skills as a developer in a professional environment. I wanted to imporve both my technical knowledge as well as my soft skills.

    - My first goal was to understand our tech stack and in particular get a good grasp on the Kubernetes systems we employed
    - My next goal was to improve my teamwork skills by showcasing and discussing my current tasks with my mentor on a weekly basis as well as perform a formal presentation in front of my team
    - Finally, my last goal was to be able to effectively budget my time such that I could complete my required work, attend mandatory and optional meetings, and attend SAP intern meetings so that I could expand my knowledge and professional network

    In regards to learning our tech stack this was no small task. This was my first time working at a company of this magnitude and the amount of learning I did in the first two months was like drinking from a firehose. It felt like everyday I was met with a new blockade and had to ask someone how to proceed. I kept persisting though, and once I was able to understand our tech stack I was able to be given new tasks and only need explanation of the high level concepts. It was a very rewarding expereince to see myself become familiar with Kuberentes and our workflows. By the end of the term I was given a frankly massive project that took two months to complete but this showed that my team trusted me with serious projects and it felt as if my learning had payed dividends.

    As for communication this my first ever coop having an in-person standup. While a little daunting at first I learned to understand how our team could bring up issues in standup to hear other's knowledge. I regularly participated in all standup meetings and asked questions when needed. Additionally, I met with my mentor every Friday and we would take a deeper look into what I was working on at the time. This was very valuable to me as it forced me to fully understand what I was working on, as well as any current issues, beacuse I needed to explain it concisely. Further, when I completed one of my larger tasks I gave a presentation in front of all of my team members and received feedback on my code changes.

    My last goal was centered around my time management and it may seem simple but this actually turned out to be a rather difficult hurdle. Entering a post-pandemic world SAP Waterloo office hosted frequent events, everything from happy hours to entire days dedicated to employees giving talks on technical topics (SAP d-com). These events were great and I wanted to attend as many as possible but I frequently had to temper this eagerness with the amount of work currently on my plate. Sometimes unexpected issues would fall on my plate too, one time a bug had been found in a feature I wrote so I had to figure out how to effectievly prioritize the multiple tasks filling my JIRA board.
    
    Overall I am incredibly happy with how this co-op term turned out, I learned various cutting edge skills in a professional environment and enjoyed my time (and the coffee!). I would like to thank Alex Domaratzki for being an amazing mentor and his unlimited patience in educating me on our tech stack. I would also like to thank Lindsay Verheul who voluntarily ran all the intern events throughout both my terms and made coming into the office something to look forward to.


    Fellow UofG students Dylan Goodman, Himmat Mahal as well as other other interns and I enjoying SAP d-com: 
    `,
    image: 'dcom.jpg'
};
export { projects, resume, competers, robotics, SAP };