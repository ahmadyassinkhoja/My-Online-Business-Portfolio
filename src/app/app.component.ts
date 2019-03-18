import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ahmad-khoja-portfolio';

  tasks = [
    'Developing an ERP system for Logic Systems (front-end and backend)',
    'Developing a Supermarket Mobile Application (front-end and backend)',
    'Preparing a Full Stack Angular Course'
  ];

  user_experiences = [
    {
      company_link: 'https://ciatek.net',
      company_image: 'assets/images/ciatek.png',
      company_name: 'CIATEK - LB',
      role: 'Web Developer Intern',
      company_desc: `
      CIATEK® IT Services works with the strategic needs of our
      clients businesses in mind to determine the technology capabilities needed to support their long-term goals.`,
      learningOutcomes: [
        'Introduced to React Native',
        'Introduced to Graphql',
        'Introduced to Prisma.io',
        'Introduced to Netlify',
        'Introduced to Heroku',
        'Introduced to Firebase'
      ],
      tasks: [
        'Developing an ERP system for Logic Systems (front-end and backend)',
        'Developing a Supermarket Mobile Application (front-end and backend)',
        'Preparing a Full Stack Angular Course'
      ],
      period_place: 'September 2018 - March 2019 | Beirut, LB'
    },
    {
      company_link: 'https://www.itxi.net',
      company_image: 'assets/images/itxi.png',
      company_name: 'ITXI - LB',
      role: 'Web Developer Intern',
      company_desc: `
      Founded in 1995, ITXI is a thriving application development and IT consulting firm that serves enterprise
      organizations worldwide in the Air-Travel Industry (Airlines & Airports). `,
      learningOutcomes: [
        'Introduced to Angular 6',
        'Introduced to Vue.js',
        'Introduced to BitBucket',
        'Introduced to JIRA software',
        'Introduced to Ag-grid Table',
        'Introduced to Golden Layouts'
      ],
      tasks: [
        'Worked as Front-End Web Developer Trainee',
        'Worked in BDS project',
        'Worked in Fin project'
      ],
      period_place: 'July 2018  - September 2018 | Beirut, LB'
    },
    {
      company_link: 'https://www.codi.tech',
      company_image: 'assets/images/codi-logo.svg',
      company_name: 'CODI BOOTCAMP - LB',
      role: 'Full-Stack Web Developer Trainee',
      company_desc: `
      Codi, based in Beirut, offers a free and intensive 6-months programme to become full-stack web developers
      (front and back end), digital project managers… and many other digital professions which are in high demand today `,
      learningOutcomes: [
        'Introduced to React Js',
        'Introduced to Node Js',
        'Introduced to AGILE Methodology',
        'Introduced to Mongo DB',
        'Introduced to Linux OS',
        'Introduced to Linode VPS'
      ],
      tasks: [
        'Created Codi Talent Project within a Team',
        'Created Mini Studio Project within a Team',
        'Created Snake Game using Vanilla JS',
        'Finished a lot of tutorials',
        'Attending a lot of workshops'
      ],
      period_place: 'November 2018  - June 2019 | Beirut, LB'
    }
  ];

  user_projects = [
    {
      imageUrl: 'url("assets/images/codi-logo.svg")',
      project_name: 'Codi Talent',
      project_desc:
        'A Website to Showcase Codi Alumni for companies that are interested in hiring',
      tasks: [
        'Plan project schedules',
        'Build many features',
        'Take briefs from clients',
        'Managed a team of 3 people',
        'Built Responsive website'
      ],
      project_url: 'https://talents.codi.tech'
    },
    {
      imageUrl: 'url("assets/images/minimall.png")',
      project_name: 'Mini Mall',
      project_desc: 'SuperMarket Application',
      tasks: [
        'Build Client Application',
        'Build Admin Panel',
        'Take briefs from clients',
        'Built Responsive App'
      ],
      project_url: 'https://supermarket-1542828174855.firebaseapp.com'
    }
  ];

  user_skills = [
    {
      title: 'HTML',
      skills: [
        {
          name: 'HTML5',
          image: 'assets/images/html5.png'
        },
        {
          name: 'JSX',
          image: 'assets/images/react.png'
        }
      ]
    },
    {
      title: 'CSS',
      skills: [
        {
          name: 'CSS3',
          image: 'assets/images/css3.png'
        },
        {
          name: 'Bootstrap',
          image: 'assets/images/bootstrap.png'
        },
        {
          name: 'Material UI',
          image: 'assets/images/materialui.png'
        },
        {
          name: 'Picnic',
          image: 'assets/images/picnic.png'
        },
        {
          name: 'Bulma',
          image: 'assets/images/bulma.png'
        }
      ]
    },
    {
      title: 'Javascript',
      skills: [
        {
          name: 'Javascript',
          image: 'assets/images/javascript.png'
        },
        {
          name: 'React',
          image: 'assets/images/react.png'
        },
        {
          name: 'Angular',
          image: 'assets/images/angular.png'
        },
        {
          name: 'Vue',
          image: 'assets/images/vuejs.png'
        },
        {
          name: 'Node',
          image: 'assets/images/nodejs.png'
        },
        {
          name: 'Ionic',
          image: 'assets/images/ionic.png'
        },
        {
          name: 'React Native',
          image: 'assets/images/react-native.png'
        },
        {
          name: 'ES6',
          image: 'assets/images/es6.svg'
        }
      ]
    },
    {
      title: 'Back-End',
      skills: [
        {
          name: 'Node',
          image: 'assets/images/nodejs.png'
        },
        {
          name: 'Laravel',
          image: 'assets/images/laravel.png'
        },
        {
          name: 'GraphQL',
          image: 'assets/images/graphql.png'
        },
        {
          name: 'Prisma',
          image: 'assets/images/prisma.png'
        }
      ]
    },
    {
      title: 'Database',
      skills: [
        {
          name: 'MySQL',
          image: 'assets/images/mysql.png'
        },
        {
          name: 'Mongo DB',
          image: 'assets/images/mongodb.png'
        }
      ]
    },
    {
      title: 'Version Source Control',
      skills: [
        {
          name: 'Github',
          image: 'assets/images/github.png'
        },
        {
          name: 'Git',
          image: 'assets/images/git.png'
        },
        {
          name: 'Bitbucket',
          image: 'assets/images/bitbucket.png'
        }
      ]
    },
    {
      title: 'Hosting',
      skills: [
        {
          name: 'Netlify',
          image: 'assets/images/netlify.png'
        },
        {
          name: 'Heroku',
          image: 'assets/images/heroku.png'
        },
        {
          name: 'Firebase',
          image: 'assets/images/firebase.png'
        },
        {
          name: 'Linode VPS',
          image: 'assets/images/linode.png'
        }
      ]
    },
    {
      title: 'Operating System',
      skills: [
        {
          name: 'Windows',
          image: 'assets/images/windows.png'
        },
        {
          name: 'MAC',
          image: 'assets/images/mac.png'
        },
        {
          name: 'Linux',
          image: 'assets/images/linux.png'
        },
        {
          name: 'Arch Linux',
          image: 'assets/images/arch.png'
        },
        {
          name: 'Ubuntu Linux',
          image: 'assets/images/ubuntu.png'
        }
      ]
    }
  ];

  user_schools = [
    {
      school_name: 'CODI BOOTCAMP',
      school_url: 'http://www.codi.tech',
      school_period: 'Beirut, LB | November 2018 - June 2019',
      school_result: 'Full Stack Development Program - Certified by Simplon'
    },
    {
      school_name: 'BAU UNIVERSITY',
      school_url: 'http://www.codi.tech',
      school_period: 'Beirut, LB | 2014 - 2018',
      school_result: 'B.S. in Management Information System'
    }
  ];
}
