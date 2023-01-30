import { IProjectBox, ProjectBox } from './ProjectBox';

export interface IProjects extends React.HTMLAttributes<HTMLDivElement> {}

export const Projects: React.FC<IProjects> = ({ children }) => {
  const projects: IProjectBox[] = [
    {
      name: 'Obstaw.se',
      description: (
        <div className="space-y-2 text-base font-thin">
          <p>
            Obstaw.se is a web application where you can bet on football matches
            with your friends. It is a project that I created in cooperation
            with my{' '}
            <a
              href="https://github.com/hubskysolutions"
              target="_blank"
              className="text-orange-primary"
            >
              friend
            </a>
            . Our goal was to create a betting platform for groups of friends,
            that does not require any money to be spent. You can check who is
            the best at predicting results in your group.
          </p>
          <p>
            Available matches and results are synchronized with an external data
            source every minute, so the results are always up to date.
          </p>
          <p>
            Project is still{' '}
            <span className="underline decoration-orange-primary">
              in development
            </span>
            , but you can already create an account and start betting with your
            friends.
          </p>
        </div>
      ),
      imagePath: '/obstaw-se.png',
      imageAlt: 'Obstaw.se preview',
      externalLink: 'https://obstaw.se',
      technologies: [
        'React',
        'Next.js',
        'Typescript',
        'Mantine',
        'C#',
        'ASP.NET Core',
        'Docker',
        'NGINX',
        'PostgreSQL',
      ],
    },
    {
      name: 'Network Devices Monitor',
      description: (
        <div className="space-y-2 text-base font-thin">
          <p>
            This project is a part of my master's thesis, which I have written
            with my{' '}
            <a
              href="https://github.com/hubskysolutions"
              target="_blank"
              className="text-orange-primary"
            >
              friend
            </a>
            . The goal of the project was to create a system that would allow to
            monitor the status of routers and switches in a network. The system
            consists of a web application that allows to view the status of
            devices and setup notifications for each device.
          </p>
          <p>
            Communication with devices is done using SNMP protocol. The system
            is able to monitor the status of devices, such as CPU usage, memory
            usage, disk usage, etc. It is also able to monitor the status of
            interfaces, such as the number of packets sent and received, the
            number of errors, etc. Data are shared betweend services using
            Apache Kafka.
          </p>
        </div>
      ),
      imagePath: '/network-devices-monitor.png',
      imageAlt: 'Network Devices Monitor preview',
      technologies: [
        'Vue',
        'Python',
        'Kafka',
        'Node.js',
        'Typescript',
        'Express',
        'Docker',
        'NGINX',
        'MongoDB',
      ],
    },
  ];

  return (
    <div className="mt-20 w-full flex-1 flex-col items-center justify-center space-y-20 text-center">
      {projects.map((project, index) => (
        <ProjectBox key={index} {...project} reversed={index % 2 == 1} />
      ))}
    </div>
  );
};
