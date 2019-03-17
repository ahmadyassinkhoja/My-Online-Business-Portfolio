import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ahmad-khoja-portfolio';

  skills = [
    {
      name: 'HTML5',
      image: 'assets/images/html5.png'
    }
  ];

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
      tasks: [
        ' Worked as Front-End Web Developer Trainee in Angular 6 and Vue js',
        ' Worked in BDS project',
        'Worked in Fin project',
        'Introduced to JIRA software and Agile methodology'
      ],
      period_place: 'July 2018  - September 2018 | Beirut, LB'
    },
    {
      company_link: 'https://www.codi.tech',
      company_image: 'assets/images/codi-logo.svg',
      company_name: 'CODI - LB',
      role: 'Full-Stack Web Developer Trainee',
      company_desc: `
      Codi, based in Beirut, offers a free and intensive 6-months programme to become full-stack web developers
      (front and back end), digital project managers… and many other digital professions which are in high demand today `,
      tasks: [
        'Back end (Node Js, SQL, Database)',
        'Front end (Javascript ’ES6’, React.js, Bootstrap, Material UI, HTML, CSS)',
        'Server Management (LAMP Stack, Linux)',
        'Project Management (AGILE Methodology)',
        'Created responsive applications and managed some projects to real clients'
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
}
