import { Timeline } from './Timeline';

export const Resume = ({ isActive }) => {
  const experienceItems = [
    {
      title: "Data Support Associate",
      institution: "OfferUP",
      location: "Atlanta, GA, US & remote",
      date: "Sep 2023 — Aug 2024",
      details: [
        "Developed Python scripts (Pandas, NumPy) for data wrangling and preprocessing, improving data quality",
        "Performed exploratory data analysis (EDA) using Python, identifying key trends for decision-making",
        "Automated repetitive data tasks using Python scripts, boosting team productivity",
        "Conducted A/B testing and delivered reports, enhancing customer satisfaction",
        "Created data visualizations & reports using Matplotlib and Plotly"
      ]
    },
    {
      title: "Data Intern",
      institution: "OfferUP",
      location: "Atlanta, GA, US",
      date: "Summer 2023",
      details: [
        "Assisted in data cleaning and preprocessing using Python (Pandas)",
        "Supported visualization tasks using Matplotlib and Plotly",
        "Documented workflows, streamlining team knowledge sharing"
      ]
    },
    {
      title: "Graduate Student Assistant: Data & Database Support",
      institution: "Office of IT - OIT",
      location: "The Uni. of Alabama",
      date: "Spring 2023",
      details: [
        "Cooperated with database workflows, using Python-based data pipelines and SQL",
        "Provided analytical insights to optimize code efficiency",
        "Collaborated with DBAs to refine Python scripts, strengthening system performance",
        "Gained hands-on exposure with database administration tools"
      ]
    },
    {
      title: "Graduate Teaching Assistant",
      institution: "The Univ. of Alabama",
      location: "Tuscaloosa, AL, US",
      date: "Aug 2022 — May 2023",
      details: [
        "Completed university's postgraduate education training program for effective teaching methods",
        "Taught mathematics courses including Pre-Calculus, Calculus, and Discrete Mathematics",
        "Managed coursework and progress tracking for 120 students across 4 groups",
        "Directed weekly problem-solving sessions, increasing student performance by 20%",
        "Evaluated assignments and exams, maintaining a 95% accuracy rate"
      ]
    },
    {
      title: "Mathematics Teacher",
      institution: "Various Institutions",
      location: "TR",
      date: "2016 — 2017",
      details: [
        "Taught mathematics at secondary education level while transitioning into data science and technology."
      ]
    },
    {
      title: "Program Supervisor & Assistant (Volunteer)",
      institution: "Nesin Mathematics Village",
      location: "Şirince, TR",
      date: "2014 — 2017",
      details: [
        "Led groups of 15-20 high school students in intensive two-week mathematics programs",
        "Ensured program schedule compliance, health monitoring, and attendance tracking",
        "Provided subject comprehension support and problem-solving assistance",
        "Coordinated daily activities and improved program efficiency",
        "Assisted with mathematics instruction under renowned professors Ali Nesin and Mustafa Yağcı"
      ]
    }
  ];

  const educationItems = [
    {
      title: "Ph.D. in Mathematics",
      institution: "The Univ. of Alabama",
      location: "Tuscaloosa, AL, US",
      date: "2024",
      text: "I conducted research in Geometric Topology, specializing in Contact Geometry, under the guidance of my advisor Bülent Tosun. During my doctoral studies, I served as an assistant instructor, teaching undergraduate mathematics courses while pursuing my research interests, before discontinuing the program in 2024."
    },
    {
      title: "M.Sc. in Mathematics",
      institution: "Middle East Technical University",
      location: "Ankara, TR",
      date: "2022",
      text: "I worked on geometric topology with my advisor Mohan Bhupal during my master's program and completed my thesis titled \"Trisections of Smooth 4-Manifolds\"."
    },
    {
      title: "B.Sc. in Mathematics",
      institution: "Ege University",
      location: "İzmir, TR",
      date: "2016",
      text: "I completed my undergraduate degree in Mathematics with a concentration in Theoretical Mathematics. In 2017, I completed my Pedagogical Formation training at the same university."
    },
    {
      title: "Statistics",
      institution: "Ondokuz Mayıs University",
      location: "Samsun, TR",
      date: "2012",
      text: "Completed coursework in Statistics, including regression analysis, probability theory, hypothesis testing, game theory, and advanced statistical methods."
    }
  ];

  return (
    <article className={`resume ${isActive ? 'active' : ''}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <Timeline 
        title="Experience"
        icon="briefcase-outline"
        items={experienceItems}
      />

      <Timeline 
        title="Education"
        icon="book-outline"
        items={educationItems}
      />
    </article>
  );
}; 