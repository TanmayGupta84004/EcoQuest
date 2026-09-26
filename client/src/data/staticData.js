/* ===================================
   EcoQuest — Static Data for Frontend
   =================================== */

/* ---- Study Modules ---- */
export const modules = [
  {
    id: 1,
    title: 'Climate Change Fundamentals',
    description: 'Understand the science behind global warming, greenhouse gases, and their impact on our planet.',
    category: 'Climate',
    difficulty: 'Beginner',
    progress: 75,
    lessons: 8,
    duration: '2 hrs',
    image: '🌡️',
    content: {
      overview: 'Climate change refers to long-term shifts in temperatures and weather patterns. While natural factors such as volcanic eruptions and solar cycles have historically influenced the climate, human activities—particularly the burning of fossil fuels like coal, oil, and natural gas—have become the dominant driver of climate change since the Industrial Revolution.',
      keyConcepts: [
        'Greenhouse Effect — How gases like CO₂ and methane trap heat in the atmosphere',
        'Carbon Cycle — The movement of carbon between atmosphere, oceans, soil, and living organisms',
        'Global Temperature Rise — Earth has warmed by approximately 1.1°C since pre-industrial times',
        'Feedback Loops — How melting ice reduces reflectivity, accelerating warming',
        'Tipping Points — Thresholds beyond which climate changes become irreversible'
      ],
      summary: 'Climate change is primarily driven by human activities that release greenhouse gases. Understanding the science helps us make informed decisions about mitigation and adaptation strategies. Every fraction of a degree matters in determining future impacts on ecosystems, weather patterns, and human societies.'
    }
  },
  {
    id: 2,
    title: 'Renewable Energy Sources',
    description: 'Explore solar, wind, hydro, and other clean energy technologies powering our sustainable future.',
    category: 'Energy',
    difficulty: 'Intermediate',
    progress: 40,
    lessons: 10,
    duration: '3 hrs',
    image: '⚡',
    content: {
      overview: 'Renewable energy comes from sources that are naturally replenished on a human timescale. Unlike fossil fuels, which take millions of years to form, renewables offer a sustainable path to meeting our energy needs while reducing carbon emissions and environmental impact.',
      keyConcepts: [
        'Solar Energy — Photovoltaic cells convert sunlight directly into electricity',
        'Wind Power — Turbines harness kinetic energy from wind patterns',
        'Hydroelectric Power — Flowing water drives turbines to generate electricity',
        'Geothermal Energy — Heat from Earth\'s core provides steady, reliable power',
        'Energy Storage — Battery technology enabling 24/7 renewable power supply'
      ],
      summary: 'Renewable energy technologies are becoming increasingly cost-competitive with fossil fuels. The transition to clean energy is essential for combating climate change while ensuring energy security and creating new economic opportunities around the world.'
    }
  },
  {
    id: 3,
    title: 'Waste Management & Recycling',
    description: 'Learn about responsible waste disposal, recycling systems, and the circular economy model.',
    category: 'Waste',
    difficulty: 'Beginner',
    progress: 90,
    lessons: 6,
    duration: '1.5 hrs',
    image: '♻️',
    content: {
      overview: 'Effective waste management is critical for environmental protection and public health. The modern approach moves beyond simple disposal to embrace reduce, reuse, and recycle principles as part of a broader circular economy that minimizes waste and maximizes resource efficiency.',
      keyConcepts: [
        'Waste Hierarchy — Reduce, Reuse, Recycle, Recover, and Dispose',
        'Circular Economy — Designing out waste and keeping materials in use',
        'Composting — Organic waste decomposition for nutrient-rich soil amendment',
        'E-Waste — Proper handling of electronic waste to recover valuable materials',
        'Plastic Pollution — Understanding types of plastic and their recyclability'
      ],
      summary: 'Moving toward zero waste requires systemic changes in how we produce, consume, and dispose of materials. Individual actions like proper sorting and reducing single-use items contribute to larger environmental goals when adopted at scale.'
    }
  },
  {
    id: 4,
    title: 'Water Conservation',
    description: 'Discover the importance of freshwater resources and practical strategies for conservation.',
    category: 'Water',
    difficulty: 'Beginner',
    progress: 20,
    lessons: 7,
    duration: '2 hrs',
    image: '💧',
    content: {
      overview: 'Water is one of Earth\'s most precious resources, yet only about 1% of the world\'s water is readily accessible for human use. With growing populations and climate change altering precipitation patterns, water conservation has never been more important.',
      keyConcepts: [
        'Water Cycle — Evaporation, condensation, precipitation, and collection',
        'Freshwater Scarcity — 2 billion people lack access to safe drinking water',
        'Agricultural Water Use — Farming accounts for roughly 70% of global freshwater use',
        'Water Footprint — The hidden water cost embedded in products we consume',
        'Rainwater Harvesting — Collecting and storing rain for later use'
      ],
      summary: 'Conserving water requires awareness of both direct usage and the indirect water embedded in the products and food we consume. Simple daily habits combined with efficient technology can significantly reduce water waste and help secure this vital resource for future generations.'
    }
  },
  {
    id: 5,
    title: 'Biodiversity & Ecosystems',
    description: 'Explore the web of life, endangered species, and why preserving biodiversity matters.',
    category: 'Biodiversity',
    difficulty: 'Intermediate',
    progress: 10,
    lessons: 9,
    duration: '2.5 hrs',
    image: '🦋',
    content: {
      overview: 'Biodiversity encompasses the variety of all living organisms on Earth—from genes to species to ecosystems. This diversity is the foundation of ecosystem services that provide humanity with food, clean water, medicine, and climate regulation.',
      keyConcepts: [
        'Ecosystem Services — Pollination, water purification, carbon sequestration',
        'Species Interdependence — Food webs and how species rely on each other',
        'Habitat Loss — Deforestation and urbanization as primary drivers of biodiversity decline',
        'Conservation Strategies — Protected areas, wildlife corridors, and rewilding',
        'Invasive Species — How non-native organisms disrupt established ecosystems'
      ],
      summary: 'We are currently experiencing what scientists call the sixth mass extinction, with species disappearing at rates 100 to 1,000 times the natural background rate. Protecting biodiversity is not just an environmental issue—it is essential for food security, medicine, and the resilience of the systems that support all life on Earth.'
    }
  },
  {
    id: 6,
    title: 'Sustainable Living',
    description: 'Practical tips and lifestyle changes for reducing your personal environmental footprint.',
    category: 'Lifestyle',
    difficulty: 'Beginner',
    progress: 55,
    lessons: 8,
    duration: '2 hrs',
    image: '🌿',
    content: {
      overview: 'Sustainable living means making choices that reduce your personal environmental impact while maintaining quality of life. It encompasses decisions about food, transportation, energy use, consumption habits, and community engagement.',
      keyConcepts: [
        'Carbon Footprint — Measuring your personal greenhouse gas emissions',
        'Sustainable Diet — How food choices affect the environment',
        'Green Transportation — Walking, cycling, public transit, and electric vehicles',
        'Conscious Consumption — Buying less, choosing quality, supporting ethical brands',
        'Community Action — Local initiatives that multiply individual impact'
      ],
      summary: 'While systemic change is essential, individual lifestyle choices collectively drive significant environmental impact. Sustainable living is not about perfection but about making better choices where you can, starting with the areas that have the greatest impact for your situation.'
    }
  }
];

/* ---- Quiz Questions ---- */
export const quizzes = {
  1: {
    title: 'Climate Change Quiz',
    moduleId: 1,
    questions: [
      {
        id: 1,
        question: 'Which gas is the primary contributor to the greenhouse effect caused by human activity?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'By approximately how much has the Earth\'s average temperature risen since pre-industrial times?',
        options: ['0.3°C', '1.1°C', '2.5°C', '5.0°C'],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'What is a "feedback loop" in climate science?',
        options: [
          'A political debate about climate policy',
          'A process where effects reinforce or diminish the original cause',
          'A type of renewable energy cycle',
          'A method for recycling carbon'
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'Which of the following is NOT a greenhouse gas?',
        options: ['Methane', 'Nitrogen', 'Nitrous Oxide', 'Water Vapor'],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'What is the Paris Agreement\'s goal for limiting global temperature rise?',
        options: ['Below 0.5°C', 'Below 1.5°C', 'Below 3°C', 'Below 5°C'],
        correctAnswer: 1
      }
    ]
  },
  2: {
    title: 'Renewable Energy Quiz',
    moduleId: 2,
    questions: [
      {
        id: 1,
        question: 'Which renewable energy source currently generates the most electricity globally?',
        options: ['Solar', 'Wind', 'Hydroelectric', 'Geothermal'],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'What does a photovoltaic cell convert into electricity?',
        options: ['Wind', 'Heat', 'Sunlight', 'Water flow'],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Which country leads the world in installed solar capacity?',
        options: ['United States', 'Germany', 'China', 'India'],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'What is a major advantage of geothermal energy?',
        options: [
          'It works only during daytime',
          'It provides consistent baseload power',
          'It requires no drilling',
          'It only works near the equator'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'What technology is critical for making intermittent renewables reliable?',
        options: ['Fossil fuel backup', 'Energy storage / batteries', 'Nuclear power', 'Coal gasification'],
        correctAnswer: 1
      }
    ]
  },
  3: {
    title: 'Waste Management Quiz',
    moduleId: 3,
    questions: [
      {
        id: 1,
        question: 'What is the correct order of the waste hierarchy?',
        options: [
          'Recycle, Reduce, Reuse',
          'Reduce, Reuse, Recycle',
          'Reuse, Recycle, Reduce',
          'Dispose, Recycle, Reduce'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'What does a "circular economy" aim to do?',
        options: [
          'Increase production speed',
          'Eliminate waste by keeping materials in use',
          'Create circular buildings',
          'Focus only on recycling'
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'How long does a plastic bottle take to decompose in a landfill?',
        options: ['10 years', '50 years', '450 years', '1 year'],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'What is composting?',
        options: [
          'Burning waste at high temperatures',
          'Decomposing organic matter into nutrient-rich soil',
          'Recycling plastic into new products',
          'Filtering water through waste'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Which type of waste is classified as e-waste?',
        options: ['Food scraps', 'Old newspapers', 'Discarded smartphones', 'Garden clippings'],
        correctAnswer: 2
      }
    ]
  },
  4: {
    title: 'Water Conservation Quiz',
    moduleId: 4,
    questions: [
      {
        id: 1,
        question: 'What percentage of Earth\'s water is readily accessible freshwater?',
        options: ['About 1%', 'About 10%', 'About 25%', 'About 50%'],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'Which sector uses the most freshwater globally?',
        options: ['Industry', 'Domestic', 'Agriculture', 'Energy'],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'What is a "water footprint"?',
        options: [
          'The mark water leaves on surfaces',
          'Total volume of water used to produce goods we consume',
          'The depth of a river',
          'A type of water filter'
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'Which daily activity typically uses the most household water?',
        options: ['Drinking', 'Cooking', 'Showering/Bathing', 'Watering plants'],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'What is rainwater harvesting?',
        options: [
          'Selling bottled rainwater',
          'Collecting and storing rainwater for later use',
          'A method of cloud seeding',
          'Filtering ocean water'
        ],
        correctAnswer: 1
      }
    ]
  },
  5: {
    title: 'Biodiversity Quiz',
    moduleId: 5,
    questions: [
      {
        id: 1,
        question: 'What does biodiversity refer to?',
        options: [
          'Only the number of animal species',
          'The variety of all living organisms at every level',
          'Only endangered species',
          'The size of a forest'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'What is the primary driver of biodiversity loss?',
        options: ['Natural disasters', 'Habitat loss', 'Volcanic eruptions', 'Solar flares'],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'What are ecosystem services?',
        options: [
          'Paid conservation programs',
          'Benefits nature provides to humans like clean air and pollination',
          'Ecotourism businesses',
          'Government environmental departments'
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'What are invasive species?',
        options: [
          'Species that live underground',
          'Non-native organisms that disrupt established ecosystems',
          'Endangered animals',
          'Migrating birds'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Scientists describe the current biodiversity crisis as the:',
        options: ['First mass extinction', 'Third mass extinction', 'Sixth mass extinction', 'Tenth mass extinction'],
        correctAnswer: 2
      }
    ]
  },
  6: {
    title: 'Sustainable Living Quiz',
    moduleId: 6,
    questions: [
      {
        id: 1,
        question: 'Which single action has the largest impact on reducing your personal carbon footprint?',
        options: ['Recycling paper', 'Using LED bulbs', 'Reducing air travel', 'Taking shorter showers'],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'What is "conscious consumption"?',
        options: [
          'Buying as much as possible',
          'Only buying luxury brands',
          'Making thoughtful purchasing decisions considering environmental impact',
          'Shopping only online'
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Which diet generally has the lowest environmental impact?',
        options: ['High-meat diet', 'Seafood-heavy diet', 'Plant-based diet', 'Fast-food diet'],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'What is "greenwashing"?',
        options: [
          'Washing clothes in cold water',
          'Companies misleading consumers about their environmental practices',
          'Cleaning with eco-friendly products',
          'Painting buildings green'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Which transportation method has the lowest carbon emissions per km?',
        options: ['Driving alone', 'Flying', 'Cycling', 'Ride-sharing'],
        correctAnswer: 2
      }
    ]
  }
};

/* ---- Leaderboard Data ---- */
export const leaderboardData = [
  { rank: 1, username: 'EcoWarrior', xp: 12450, level: 24, avatar: '🌍' },
  { rank: 2, username: 'GreenGuardian', xp: 11200, level: 22, avatar: '🌱' },
  { rank: 3, username: 'NatureLover', xp: 10800, level: 21, avatar: '🦋' },
  { rank: 4, username: 'SolarStar', xp: 9650, level: 19, avatar: '☀️' },
  { rank: 5, username: 'OceanKeeper', xp: 8900, level: 18, avatar: '🌊' },
  { rank: 6, username: 'TreeHugger', xp: 8200, level: 17, avatar: '🌳' },
  { rank: 7, username: 'EcoChampion', xp: 7500, level: 15, avatar: '🏆' },
  { rank: 8, username: 'WindRider', xp: 6800, level: 14, avatar: '💨' },
  { rank: 9, username: 'EarthSaver', xp: 6100, level: 13, avatar: '🌎' },
  { rank: 10, username: 'GreenThumb', xp: 5500, level: 11, avatar: '🪴' },
  { rank: 11, username: 'AquaHero', xp: 4900, level: 10, avatar: '💧' },
  { rank: 12, username: 'EcoExplorer', xp: 4200, level: 9, avatar: '🧭' },
  { rank: 13, username: 'You', xp: 3850, level: 8, avatar: '🌟', isCurrentUser: true },
  { rank: 14, username: 'LeafRunner', xp: 3400, level: 7, avatar: '🍃' },
  { rank: 15, username: 'PlanetPal', xp: 2800, level: 6, avatar: '🌏' }
];

/* ---- Dashboard Data ---- */
export const dashboardData = {
  user: {
    name: 'Alex',
    level: 8,
    xp: 3850,
    xpToNextLevel: 5000,
    streak: 12,
    totalModulesCompleted: 4,
    totalModules: 6,
    quizzesCompleted: 8,
    rank: 13
  },
  recentModules: [
    { id: 3, title: 'Waste Management & Recycling', progress: 90, image: '♻️', category: 'Waste' },
    { id: 1, title: 'Climate Change Fundamentals', progress: 75, image: '🌡️', category: 'Climate' },
    { id: 6, title: 'Sustainable Living', progress: 55, image: '🌿', category: 'Lifestyle' }
  ],
  achievements: [
    { id: 1, title: 'First Steps', description: 'Complete your first module', icon: '🎯', earned: true },
    { id: 2, title: 'Quiz Whiz', description: 'Score 100% on any quiz', icon: '🧠', earned: true },
    { id: 3, title: 'Eco Scholar', description: 'Complete 3 modules', icon: '📚', earned: true },
    { id: 4, title: 'Green Streak', description: 'Learn 7 days in a row', icon: '🔥', earned: true },
    { id: 5, title: 'Planet Guardian', description: 'Reach Level 10', icon: '🛡️', earned: false },
    { id: 6, title: 'Master Explorer', description: 'Complete all modules', icon: '🏆', earned: false }
  ]
};
