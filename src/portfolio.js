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
      name: 'Project 2',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Project 3',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
  ]

  export { projects }