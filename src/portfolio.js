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
  ]

  export { projects }