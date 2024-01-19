import Divider from "@/Atoms/Divider";
import { H2Heading } from "@/Atoms/Heading";

const SERVICES_KEY = {
  "frontend-development": "frontend-development",
  "backend-development": "backend-development",
  "staff-augmentation": "staff-augmentation",
  "quality-assurance": "quality-assurance",
  "ui-ux": "ui-ux",
  "mobile-development": "mobile-development",
};

export const SERVICES_DATA = [
  {
    name: "Staff Augmentation",
    description:
      "We believe in the power of collaboration. We understand that success in software development hinges on having the right mix of skills, and our staff augmentation services empower your team with the right talent at the right time.",
    slug: `/services/${SERVICES_KEY["staff-augmentation"]}`,
  },
  {
    name: "Frontend Development",
    description:
      "Embark on a digital journey with our Frontend Application Development service. We weave intricate codes to create custom web solutions that not only meet but exceed your business objectives. From seamless user experiences to robust functionality, your online presence is our canvas, and innovation is our brushstroke.",
    slug: `/services/${SERVICES_KEY["frontend-development"]}`,
  },
  {
    name: "Mobile Development",
    description:
      "Bring your ideas to life in the palms of your audience. With Mobile Application Development, we sculpt intuitive and engaging apps for iOS and Android. Our team blends creativity with cutting-edge technology to ensure your brand stands out in the crowded app landscape, delivering experiences that captivate and retain users.",
    slug: `/services/${SERVICES_KEY["mobile-development"]}`,
  },
  {
    name: "UI/UX Design",
    description:
      "Crafting digital experiences that leave a lasting impression. Our UI/UX Design service goes beyond aesthetics. We blend creativity with user-centric design principles, ensuring that every click, scroll, and interaction tells a story. Elevate your brand through interfaces that captivate and resonate.",
    slug: `/services/${SERVICES_KEY["ui-ux"]}`,
  },
  {
    name: "Backend Development",
    description:
      "Unleash the power behind the scenes with our Backend Server Development service. We build the digital backbone of your applications, ensuring they run smoothly, securely, and scale effortlessly. When it comes to reliability and performance, we don't just meet expectations - we exceed them.",
    slug: `/services/${SERVICES_KEY["backend-development"]}`,
  },
  {
    name: "Quality Assurance",
    description:
      "Elevate your software to new heights with our Quality Assurance service. From meticulous testing to ensuring flawless functionality, we guarantee that your applications meet the highest standards, providing users with a seamless and reliable experience.",
    slug: `/services/${SERVICES_KEY["quality-assurance"]}`,
  },
];

export const SERVICES_PAGE_DATA = {
  [SERVICES_KEY["staff-augmentation"]]: {
    cta: {
      slug: "/contact-us",
      title: "Get in touch",
    },
    description: (
      <>
        <H2Heading>
          Strategic&nbsp;
          <span className="text-theme">Power on Demand</span>, in Enrich Your
          Team, Elevate Your Success
        </H2Heading>
        <p>
          In the dynamic landscape of software development, our staff
          augmentation service stands as a pivotal solution for businesses
          seeking to optimize their teams and streamline projects efficiently.
          We understand that flexibility is key in the ever-evolving tech
          industry, and staff augmentation offers a strategic advantage by
          allowing our clients to scale their workforce precisely when needed.
          <br />
          <br />
          By seamlessly integrating our experienced professionals into your
          existing teams, we ensure that your projects are delivered with
          precision, meeting deadlines and exceeding expectations. With a
          diverse pool of skilled talents at your disposal, you can harness
          specialized expertise without the long-term commitment of hiring.
        </p>
      </>
    ),
    content: (
      <>
        <Divider margin direction="down" />
        <H2Heading>Staff Augmentation services we provide:</H2Heading>
      </>
    ),
    image: {
      src: "/assets/image/services/augmentation.png",
      width: 2000,
      height: 2000,
      isInline: true,
    },
    pageTitle: "Staff Augmentation",
    servicesProvided: [
      {
        description:
          "Provide access to a diverse pool of highly skilled and experienced professionals based on specific project requirements.",
        heading: "Skilled Professionals On-Demand",
      },
      {
        description:
          "Allow clients to scale their teams up or down as needed, ensuring optimal resource allocation without the constraints of permanent hires.",
        heading: "Flexible Team Scaling",
      },
      {
        description:
          "Offer specialists in various technologies, ensuring that clients have access to the specific skills required for their projects, from software developers to quality assurance specialists.",
        heading: "Specialized Expertise",
      },
      {
        description:
          "Enable clients to respond swiftly to changing market demands, ensuring they can adapt their workforce to meet evolving project requirements.",
        heading: "Rapid Response to Market Needs",
      },
      {
        description:
          "Optimize costs by providing access to skilled professionals without the overheads associated with long-term hiring, such as benefits and training.",
        heading: "Cost-Effective Solutions",
      },
      {
        description:
          "Offer dedicated project managers to oversee the augmented team, ensuring alignment with project goals, timelines, and quality standards",
        heading: "Dedicated Project Management",
      },
      {
        description:
          "Ensure a smooth integration of augmented staff into existing teams, fostering collaboration and maintaining productivity.",
        heading: "Seamless Integration",
      },
    ],
  },
  [SERVICES_KEY["frontend-development"]]: {
    cta: {
      slug: "/contact-us",
      title: "Get in touch",
    },
    description: (
      <>
        <H2Heading>
          Crafting Digital Delight:&nbsp;
          <span className="text-theme">Frontend Excellence</span>, Beyond
          Expectations
        </H2Heading>
        <p>
          In the fast-paced world of digital innovation, frontend development
          stands as the cornerstone of a compelling and user-centric online
          presence. We understand that the frontend is the face of your digital
          footprint, serving as the gateway for user interactions.
          <br />
          <br />
          With a focus on user-centric design, accessibility, and cross-browser
          compatibility, frontend development ensures that digital products are
          not only aesthetically pleasing but also functional across various
          devices. This discipline is at the forefront of delivering seamless,
          intuitive, and visually compelling experiences, playing a pivotal role
          in shaping the success of websites and applications in the
          ever-evolving landscape of the digital world.
        </p>
      </>
    ),
    content: (
      <>
        <Divider margin direction="down" />
        <H2Heading>Frontend Development services we provide:</H2Heading>
      </>
    ),
    image: {
      src: "/assets/image/services/frontend.png",
      width: 2000,
      height: 2000,
      isInline: true,
    },
    pageTitle: "Frontend Development",
    servicesProvided: [
      {
        heading: "HTML5 and CSS3 Responsive Design",
        description:
          "A responsive design enhances user engagement. We create web apps and websites that look and feel consistent across different device sizes and types, including mobile and desktop. We use HTML to build a structured foundation for web content and employ CSS to style and position static and interactive elements. Everything stays organized, from headlines to buttons.",
      },
      {
        heading: "JavaScript Development with Frameworks",
        description:
          "JavaScript elevates your user interfaces, making them more dynamic. Add interactive elements like image carousels, animation, and parallax scrolling.   We construct feature-rich web, desktop and mobile apps using JavaScript and frameworks like React, Next.js, Vue, and Angular. These frameworks help implement important features such as API integration, client-side routing, and error handling.",
      },
      {
        heading: "CMS Theming",
        description:
          "Set yourself apart from generic-looking websites and apps. Thanks to content management system (CMS) theming, businesses can customize layouts for CMS platforms like WordPress, Sanity, Wix, and Strapi. Our front-end developers create attractive, tailored designs. This establishes a unique online presence and enhances user engagement.",
      },
      {
        heading: "UI/UX Design",
        description:
          "Transform rough concepts into intuitive user interfaces and engaging user experiences.   Our UI/UX designs not only look beautiful, but they are functional and user-friendly, too. Our data-driven process is rooted in user research. We analyze user behavior using tools like Hotjar and Google Analytics, as well as traditional methods such as surveys and interviews.",
      },
      {
        heading: "Single-page Applications",
        description:
          "Develop web platforms that dynamically update content within a single web page, offering an app-like user experience. SPAs load once and manage data retrieval and navigation without requiring page refreshes. The result? Swift, engaging, and uninterrupted user interactions.",
      },
      {
        heading: "Progressive Web Applications",
        description:
          "PWAs offer a native app-like experience, blending the best features of both web and native apps. Using frameworks like React and other development tools, we build secure PWAs with a responsive design, push notifications, offline access, and fast load times.",
      },
      {
        heading: "SEO-Friendly Practices",
        description:
          "Search engines consider frontend elements when ranking websites. Well-structured and semantically correct HTML, along with other frontend practices, can positively impact a website's search engine optimization (SEO) and visibility.",
      },
      {
        heading: "Performance Optimization",
        description:
          "Efficient frontend development contributes to faster load times and smoother interactions. Optimized performance is crucial for retaining user interest and preventing frustration caused by slow or unresponsive interfaces.",
      },
      {
        description:
          "With the variety of devices and screen sizes available today, frontend developers ensure that websites and applications are responsive and accessible across different platforms, providing a consistent experience for users.",
        heading: "Cross-Platform Compatibility",
      },
    ],
  },
  [SERVICES_KEY["mobile-development"]]: {
    cta: {
      slug: "/contact-us",
      title: "Get in touch",
    },
    description: (
      <>
        <H2Heading>
          Turning&nbsp;
          <span className="text-theme">Ideas into Touchable Experiences</span>
          &nbsp;in the Palm of Your Hand
        </H2Heading>
        <p>
          In the era of digital dominance, the importance of mobile application
          development cannot be overstated, and we stand as your trusted partner
          in navigating this dynamic landscape. Mobile applications have become
          the cornerstone of modern business strategies, providing a direct and
          immersive channel for user engagement.
          <br />
          <br />
          By leveraging the latest technologies, our skilled developers ensure
          that your mobile app is not only functionally robust but also
          intuitive and visually compelling. We understand the unique demands of
          the mobile ecosystem, and our goal is to help you harness its
          potential fully.
        </p>
      </>
    ),
    content: (
      <>
        <Divider margin direction="down" />
        <H2Heading>Mobile Development services we provide:</H2Heading>
      </>
    ),
    image: {
      src: "/assets/image/services/mobile.png",
      width: 2000,
      height: 2000,
      isInline: true,
    },
    pageTitle: "Mobile Development",
    servicesProvided: [
      {
        description:
          "Transform your ideas into a sleek, user-centric application. We create apps for various devices, including the iPhone, Android, iPad, Apple Watch, Apple TV and Android TV. Work with our vetted mobile developers to get your app published in the App/Play Store. Using Swift & Kotlin and leveraging tools such as Xcode & Android Studio, we deliver scalable, high-performance apps.",
        heading: "Custom App Development",
      },
      {
        heading: "Cross-Platform Development",
        description:
          "Want to save money and speed up your mobile app development? Build apps that run on iOS and Android using a single codebase. We use tools like React Native and Flutter to deliver apps that provide a native-like user experience. This means the app will look, feel, and behave consistently, whether it’s accessed on an Android tablet or an iPhone.",
      },
      {
        heading: "Integration Services",
        description:
          "Integrate your app with various third-party services and backend systems. We use SDKs to implement the integrations and APIs to facilitate fast, secure data exchange. Add payment gateways, chatbots, social media, or biometric authentication. These features improve the overall user experience and encourage higher engagement rates.",
      },
      {
        heading: "UI/UX Design",
        description:
          "Turn rough concepts into user-friendly and engaging app interfaces. Our designers will conduct user research, create in-depth user personas, and follow an iterative design process. We’ll share high-fidelity mockups and prototypes and refine them as needed before handoff.  Your app will not only be visually appealing, but it will also deliver a smooth and memorable user experience.",
      },
      {
        heading: "QA and Testing",
        description:
          "No mobile app development process is complete without rigorous quality assurance testing. Using a combination of manual and automation testing, we perform a thorough assessment of your app. Then, we work with the development team to resolve bugs and deliver a secure, performant app.",
      },
      {
        description:
          "Keep your app updated with the latest Android OS and Apple iOS versions and device configurations. Incorporate new features, address security concerns, and optimize performance.",
        heading: "App Migration and Updates",
      },
    ],
  },
  [SERVICES_KEY["quality-assurance"]]: {
    cta: {
      slug: "/contact-us",
      title: "Get in touch",
    },
    description: (
      <>
        <H2Heading>
          Streamline Your Testing, Ship&nbsp;
          <span className="text-theme">Bulletproof Software</span>
        </H2Heading>
        <p>
          We go beyond just building exceptional software – we ensure its
          excellence through our cutting-edge Quality Assurance services.
          Picture a software development journey where every line of code is
          meticulously inspected, every feature rigorously tested, and every
          potential glitch identified and resolved before it reaches your users.
          <br />
          <br />
          We understand the risks associated with software deployment. Our QA
          services act as a robust safety net, identifying and addressing
          potential issues early in the development cycle, reducing the
          likelihood of post-release surprises.
        </p>
      </>
    ),
    content: (
      <>
        <Divider margin direction="down" />
        <H2Heading>Quality Assurance services we provide:</H2Heading>
      </>
    ),
    image: {
      src: "/assets/image/services/qa.png",
      width: 2000,
      height: 2000,
      isInline: true,
    },
    pageTitle: "Quality Assurance",
    servicesProvided: [
      {
        heading: "Manual Testing",
        description:
          "Manual testing is a hands-on approach that captures nuances automation tools might miss. By leveraging both exploratory testing and acceptance testing, we identify bugs. We also simulate real-world user interactions so the final software meets user expectations.   This comprehensive service covers the most popular testing services, including security, exploratory, ad-hoc, usability, localization, installation, error handling, and compatibility testing.",
      },
      {
        heading: "Automation Testing",
        description:
          "Set up a production line for quality checks with our automated testing services. Our automation engineers use tools like Selenium and Appium to systematically execute test cases, ensuring consistent and rapid feedback. Automating repetitive tasks reduces manual work, improves software reliability, and increases test coverage.",
      },
      {
        heading: "Regression Testing",
        description:
          "Think of regression testing as a safety net. We use tools like Selenium and frameworks like TestNG to ensure your software’s main functionalities still work after software updates.   This iterative process involves running a set of pre-defined test cases. The result: fewer glitches, consistent software quality, and reliable performance of legacy features.",
      },
      {
        heading: "API Testing",
        description:
          "Reliable APIs form the backbone of modern applications. Rigorous API testing confirms that your endpoints are not just functional but optimized, secure, and ready to handle real-world demands. We use tools like Postman or REST Assured to validate data flows, endpoint reliability, and performance under load. This leads to better software compatibility and fewer system weaknesses.",
      },
      {
        description:
          "In a world where users might jump from a high-end desktop to a mid-range smartphone, your websites and apps should look great and perform well on all browsers and devices. Our web and mobile QA service focuses on responsive design and cross-platform compatibility for a seamless user experience. We also conduct accessibility testing to confirm your software is usable by people with disabilities.",
        heading: "Web and Mobile QA",
      },
    ],
  },
  [SERVICES_KEY["ui-ux"]]: {
    cta: {
      slug: "/contact-us",
      title: "Get in touch",
    },
    description: (
      <>
        <H2Heading>
          Transforming&nbsp;
          <span className="text-theme">Pixels into Purpose</span>, Crafting
          Extraordinary Experiences
        </H2Heading>
        <p>
          In the dynamic realm of digital innovation, the importance of seamless
          and intuitive User Interface/User Experience (UI/UX) design cannot be
          overstated. We recognize that a well-crafted UI/UX is not just about
          aesthetics; it&apos;s a strategic element that directly influences
          user engagement and brand perception.
          <br />
          <br />
          Our team of seasoned designers collaborates with you to transform your
          vision into captivating interfaces, ensuring every click is intuitive,
          every visual element purposeful, and every interaction memorable. By
          prioritizing user-centric design principles, we go beyond meeting
          expectations; we strive to create digital experiences that resonate,
          leaving a lasting imprint on your users and setting your brand apart
          in the competitive digital landscape.
        </p>
      </>
    ),
    content: (
      <>
        <Divider margin direction="down" />
        <H2Heading>UI/UX Design services we provide:</H2Heading>
      </>
    ),
    image: {
      src: "/assets/image/services/ui-ux.png",
      width: 2000,
      height: 2000,
      isInline: true,
    },
    pageTitle: "UI/UX Design",
    servicesProvided: [
      {
        heading: "User Research and Analysis",
        description:
          "User research is essential to the UX design process. We use tools like Hotjar and Google Analytics to understand user behavior, along with traditional methods like user interviews, ethnographic studies, and surveys. This evidence-driven approach ensures our designs are not based on guesswork, but reflect actual user needs and preferences.",
      },
      {
        heading: "Custom User Experience Design",
        description:
          "Craft seamless and intuitive digital experiences targeted to the needs of your audience. Guided by principles of cognitive psychology and design thinking, we map out user flows and use tools like Miro and Figjam for collaborative ideation. By mapping customer journeys, we uncover pain points and opportunities to delight users.",
      },
      {
        description:
          "Transform rough concepts into beautiful, functional user interfaces. Using products like Adobe XD and Figma, we craft interfaces where every button and icon has a clear purpose. We make sure user interactions are both aesthetically pleasing and meaningful.",
        heading: "UI and Interaction Design",
      },
      {
        heading: "Wireframing and Interactive Prototyping",
        description:
          "Before diving into development, it's crucial to visualize the product's architecture. With tools like Axure and InVision, we create wireframes that lay out the blueprint. Then, we transform them into interactive prototypes. This not only allows stakeholders to get a tangible feel of the product but also ensures we identify and address potential edge cases and dependencies early.",
      },
      {
        heading: "Web and Mobile App UX/UI Design",
        description:
          "Whether you need a responsive website or a native mobile app, we work with front-end developers to ensure smooth performance and consistency across every device. Leveraging styling frameworks for web apps and mobile apps, we create adaptable UIs that offer a delightful user experience.",
      },
    ],
  },
  [SERVICES_KEY["backend-development"]]: {
    cta: {
      slug: "/contact-us",
      title: "Get in touch",
    },
    description: (
      <>
        <H2Heading>
          Building&nbsp;
          <span className="text-theme">
            Bridges Between Vision and Functionality
          </span>
          : Backend Development that Shapes Digital Futures.
        </H2Heading>
        <p>
          In the digital age, the backbone of any robust and high-performing
          software lies in its backend development, and we are dedicated to
          crafting unparalleled solutions. Our backend development service forms
          the foundation of seamless functionality, ensuring that your
          applications and systems operate with efficiency, security, and
          scalability.
          <br />
          <br />
          We specialize in designing and optimizing server-side logic,
          databases, and APIs, providing the intricate architecture that powers
          your digital experiences. Whether it&apos;s building scalable
          infrastructure or implementing data storage solutions, our backend
          development expertise is integral to enhancing the overall performance
          and responsiveness of your software.
        </p>
      </>
    ),
    content: (
      <>
        <Divider margin direction="down" />
        <H2Heading>Backend Development services we provide:</H2Heading>
      </>
    ),
    image: {
      src: "/assets/image/services/backend.png",
      width: 2000,
      height: 2000,
      isInline: true,
    },
    pageTitle: "Backend Development",
    servicesProvided: [
      {
        heading: "API Development",
        description:
          "Develop robust Application Programming Interfaces (APIs) to facilitate seamless communication between different software components. Using JavaScript, Java & Python and leveraging frameworks such as Node.js, Express, Spring, Django & Flask, we deliver scalable, high-performance servers..",
      },
      {
        heading: "Database Management",
        description:
          "Offer comprehensive database solutions, including design, optimization, and maintenance for efficient data storage and retrieval. We utilize both relative databases like MySQL & PostgreSQL, and non-relational databases like MongoDB & DynamoDB for data handling.",
      },
      {
        heading: "Integration with Frontend",
        description:
          "Ensure seamless integration with frontend components, fostering collaboration and delivering a unified and cohesive user experience. Backend integration ensures that the same set of backend services can seamlessly support different frontends, promoting cross-platform compatibility.",
      },
      {
        heading: "Real-time Data Processing",
        description:
          "Enable real-time data processing capabilities, ensuring timely updates and responsiveness to user interactions. Whether it's instant messaging, live notifications, or dynamic content changes, the backend processes and delivers real-time information to the frontend for immediate user awareness.",
      },
      {
        heading: "Security Protocols",
        description:
          "Implement robust security measures to safeguard data integrity and protect against potential vulnerabilities, ensuring a secure backend environment. Various authentication mechanisms can be implemented to ensure secure access like Username and Password Authentication, Token-Based Authentication, OAuth (Open Authorization) and Session-Based Authentication etc.",
      },
      {
        heading: "Scalable Architecture",
        description:
          "Provide expertise in designing and implementing scalable backend architectures that can adapt to growing user demands. Optimize backend performance through efficient coding practices, caching mechanisms, and load balancing techniques for a responsive user experience.",
      },
    ],
  },
};

export type SERVICE_KEY_TYPE = keyof typeof SERVICES_KEY;
export type SERVICES_TYPE = (typeof SERVICES_DATA)[number];
