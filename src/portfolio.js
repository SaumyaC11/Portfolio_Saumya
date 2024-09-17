/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
//import postmanWebp from "./assets/images/postman.webp"

// Splash Screen1

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saumya Chaudhary",
  title: "Hi all, I'm Saumya",
  subTitle: emoji(
    "A passionate Software and Machine Learning Engineer 🚀 have an experience of backend development with Python / Flask API framework and Python Libaries, always looking for new experiences"
  ),
  resumeLink:
    //1ksxEdlyWYt6gCi-0XBpZ3u30z6Ls_sHH
    "https://drive.google.com/uc?export=download&id=1fhcEHeRqAVI_W_aGykGNoW6OF5NC19tq", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SaumyaC11",
  linkedin: "https://www.linkedin.com/in/saumya-chaudhary11/",
  gmail: "schau60@uic.edu",
  //gitlab: "https://gitlab.com/saadpasta",
  gitlab : "",
  //leetcode : "https://leetcode.com/u/chaudharysaumya847/",
  ///facebook: "https://www.facebook.com/saad.pasta7",
  facebook : "",
  //medium: "https://medium.com/@saadpasta",
  medium : "",
  stackoverflow: "",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Outgoing person who loves to learn new technolgies and do problem solving each day",
  skills: [
    emoji(
      "⚡ Develop backend interface using APIs, do database integration using SQL"
    ),
    emoji("⚡ Work on Machine Learning Algorithms and Python Library for model-making"),
    emoji(
      "⚡ Data Analysis and abstraction to extract meaningful insights"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "devicon-python-plain"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "devicon-docker-plain"
    },
    {
      skillName : "C#",
      fontAwesomeClassname : "devicon-csharp-plain"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "devicon-azuresqldatabase-plain"
    },
    {
      skillName : "Gitlab",
      fontAwesomeClassname : "devicon-gitlab-plain"
    },
    {
      skillName : "Postman",
      fontAwesomeClassname : "devicon-postman-plain"
    },
    {
      skillName : "Github",
      fontAwesomeClassname : "devicon-github-original"
    },
    {
      skillName : "Flask",
      fontAwesomeClassname : "devicon-flask-original"
    },
    {
      skillName : "Linux",
      fontAwesomeClassname : "devicon-linux-plain"
    },
    {
      skillName : "MongoDB",
      fontAwesomeClassname : "devicon-mongodb-plain"
    },
    {
      skillName : "Numpy",
      fontAwesomeClassname : "devicon-numpy-plain"
    },
    {
      skillName : "Pandas",
      fontAwesomeClassname : "devicon-pandas-plain"
    },
    {
      skillName : "Tensorflow",
      fontAwesomeClassname : "devicon-tensorflow-original"
    },
    {
      skillName : "Keras",
      fontAwesomeClassname : "devicon-keras-plain"
    },
    {
      skillName : "Sklearn",
      fontAwesomeClassname : "devicon-scikitlearn-plain"
    },
    {
      skillName : "Matplotlib",
      fontAwesomeClassname : "devicon-matplotlib-plain"
    },
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Illinois Chicago",
      logo: require("./assets/images/uic1.png"),
      subHeader: "Master in Computer Science",
      duration: "August 2024 - May 2026",
      desc: "GPA = Not Declared Yet",
      descBullets: [
        "CS411 : Artificial Intelligence",
        "CS418: Intro to Data Science",
        "CS483 : Big Data Mining",
        
      ]
    },
    {
      schoolName: "Medi-Caps University",
      logo: require("./assets/images/medicaps.jpg"),
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "June 2020 - August 2024",
      desc: "GPA = 3.70",
      descBullets: ["Did courses on Machine learning, Object Oriented Programming, Software Engineering, and many more",
        "Worked as Assistant Head of Marketing and Management, responsible for ensuring reaching target audience for the events and organized 10+ workshops throughout the year"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Python",
      progressPercentage: "75%"
    },
    {
      Stack: "SQL",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Swastika Investmart Ltd",
      companylogo: require("./assets/images/swastika.png"),
      date: "January 2024 – July 2024",
      desc: "Learned skills like Python for backend development, C#, Flask API, Docker and MongoDB",
      descBullets: [
        "Engineered the backend interface for a stocks information page on the Swastika Investmart website using Python with Flask REST API calls. APIs fetch data from a MongoDB database that undergoes nightly updates using cron. The project is deployed using Docker, ensuring daily insertion of about 3,000 stocks, and the API response is converted to HTTPS with NGINX service for reverse proxy",
        "Revamped the emails sent during customer acquisition. This included fixing the issues with the 20 templates and optimizing 400 lines of C# code, thus providing a better onboarding experience and a 3% reduction in onboarding time. ",
        "Analyzed trade calls given by the research team comparing current and past trades for about 30 stocks daily. Developed SQL procedures to fetch data and automated C# APIs to email Excel reports, improving decision-making speed by 15%."
      ]
    },
    {
      role: "Research Intern",
      company: "Indian Space Research Organsization",
      companylogo: require("./assets/images/isro.png"),
      date: "June 2023 – August 2023",
      desc: "Worked towards a solution of Blue Band Detection Problem for satellite images using deep learning and GAN",
      descBullets: [
        "Artificially regenerate the blue band around 1 million images using red and green and near the infrared image of the same scene, solving the blue band detection problem in satellite images.",
        "Performed a comprehensive analysis of existing methods, leading to the development of custom GAN from scratch using TensorFlow and Keras. Trained it for around 500 epochs and obtained 94% accuracy, surpassing previously available solutions.",
        "The GAN model consisted of Dense block and U-Net architecture. Performance was rigorously evaluated quantitatively and qualitatively, showing a significant improvement over the pix2pix model in accuracy and image quality."
      ]
    },
    /*
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    } */
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  //subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/traffic.webp"),
      projectName: "Traffic Sign Classification System",
      projectDesc: "Using German Traffic Sign Recognition Benchmark (GTSRB) dataset for classifying traffic signs into 43 classes using CNN, acuracy obtained is 93%",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/SaumyaC11/TrafficSignClassification"
        }
        //  you can add extra buttons here.
      ]
    },
    /*
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "House Price Prediction Model",
      projectDesc: "Took a dataset from Kaggle and did a regression analysis on the data while checking OLS assumptions and multi-collinearity. The regression analysis gave an R-squared value of 0.837, thus indicating that the model can predict house prices with an accuracy of 83%.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }*/
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "331-341-8755",
  email_address: "schau60@uic.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
