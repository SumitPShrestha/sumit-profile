import {Component} from '@angular/core';

@Component({
  selector: 'app-experience',

  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  timeLine = [{
    year: 'Dec 2014',
    post: 'Software Analyst',
    company: 'Verisk I.T (Currently: Infinite Computer Solution)',
    sub: [
      {
        title: 'UI Automation Research and Development',
        details: [
          'Spearheaded research and development efforts for the ' +
          'creation of a robust UI automation framework utilizing ' +
          'Selenium with Java, TestNG, and other pertinent technologies.',

          'Managed test scheduling and meticulously reported test' +
          'results to stakeholders, fostering clear communication' +
          'and informed decision-making.',

        ]
      },
      {
        title: 'Medical Intelligence Research and Development',
        details: [
          'Research and development efforts for Medical' +
          'Intelligence, a core product built with Java JSP and' +
          'Oracle database, aimed at delivering innovative' +
          'solutions in healthcare analytics',
          'Implemented comprehensive unit tests for the codebase' +
          'to ensure functionality, reliability, and maintainability of' +
          'the Medical Intelligence platform',
          'Actively participated in code reviews, providing' +
          'constructive feedback and ensuring adherence to' +
          'coding standards and best practices',
          'Conducted knowledge-sharing sessions and provided' +
          'mentorship to team members, fostering a culture of' +
          'continuous learning and skill development',
        ]
      }
    ],
  },
    {
      year: '2017', post: 'Software Engineer',
      company: 'Advalent Corp.',

      sub: [
        {
          title:'',
          details: [
            'Implemented new UI tests within the existing' +
            'automation framework using Intern JS, ensuring' +
            'comprehensive test coverage and adherence to quality' +
            'standards.',

            'Solely designed and developed a cutting-edge test' +
            'automation framework using Selenium Java, leveraging' +
            'technologies such as Groovy for test data input, Page' +
            'Object Model for efficient web component' +
            'representation, and Extent Report for comprehensive' +
            'and visually appealing test reporting',
            'Facilitated seamless testing up to production' +
            'environments by addressing limitations of previous' +
            'frameworks, enhancing reliability and e􀂨ciency of' +
            'testing processes',
            'Played a significant role in the enhancement and' +
            'maintenance of the core product, Payer Portal,' +
            'leveraging technologies such as AngularJS, Sails JS,' +
            'and MySQL database, contributing to its continued' +
            'success and usability.'

          ]
        },

      ],
    },
    {
      year: '2020', post: 'Sr. Software Engineer',
      company: 'Advalent Corp.',
      sub: [
        {
          title: '',
          details: [
            'Led my scrum team on the migration of the Angular js' +
            'codebase to Angular 15, ensuring compatibility and a' +
            'smooth transition to the latest version.',

            `Provided substantial contributions to implementing
            authorization mechanisms within the framework,
            enhancing security and access control measures.`,
            ` Recognized as the uno􀂨cial lead of the Nepali team
  within our Scrum framework, providing guidance,
  mentorship, and fostering collaboration among team
  members.`,
            ` Offered leadership and direction as a Scrum team
  member, driving the team towards achieving project
  milestones and delivering high-quality solutions in a
  timely manner.`

          ]
        },
      ]
    },

  ]
}
