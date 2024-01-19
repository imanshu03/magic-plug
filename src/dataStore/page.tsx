import Divider from "@/Atoms/Divider";
import { H2Heading, H3Heading } from "@/Atoms/Heading";
import { CustomLink } from "@/Atoms/Links";

export const PAGE_DATA = [
  {
    cta: {
      slug: "/contact-us",
      title: "Hire us",
    },
    description: (
      <>
        <H2Heading>
          From&nbsp;
          <span className="text-theme">Inception to Implementation</span>, in
          the Realm of Software Solutions, Consider it done - We&apos;ve got you
          covered.
        </H2Heading>
        <p>
          We offer a comprehensive suite of software development services,
          including custom application development, web and mobile app solutions
          and system integration. Our dedicated team of experts is committed to
          delivering cutting-edge technology solutions tailored to meet your
          unique business needs, ensuring innovation, efficiency, and success in
          the ever-evolving digital landscape.
          <br />
          Additionally, our staff augmentation services provide a flexible and
          scalable approach, allowing your team to access specialized expertise
          and meet project demands effectively.
        </p>
      </>
    ),
    content: (
      <H2Heading>
        Here&apos;s a list of potential services we can offer:
      </H2Heading>
    ),
    image: {
      src: "/assets/image/services/services.png",
      width: 2000,
      height: 2000,
      isInline: true,
    },
    mainPage: true,
    pageTitle: "Our Services",
    show: true,
    slug: {
      path: "/services",
      title: "Our Services",
    },
  },
  {
    content: (
      <>
        <Divider margin direction="down" />
        <p>
          Below is an outline of the typical steps involved in the software
          development life cycle:
        </p>
        <H3Heading>Project Initiation:</H3Heading>
        <ul>
          <li>
            <strong>Client Discovery:</strong> - Understand the client&apos;s
            business, goals, and specific requirements. - Identify key
            stakeholders and their roles.
          </li>
          <li>
            <strong>Feasibility Study:</strong> - Assess the technical and
            financial feasibility of the project. - Identify potential risks and
            mitigation strategies.
          </li>
          <li>
            <strong>Project Scope Definition:</strong> - Clearly define the
            scope of the project, including features and functionalities. - Set
            project objectives and deliverables.
          </li>
        </ul>
        <H3Heading>
          <strong>Planning:</strong>
        </H3Heading>
        <ul>
          <li>
            <strong>Requirement Analysis:</strong> - Work closely with the
            client to gather detailed requirements. - Prioritize features and
            functionalities.
          </li>
          <li>
            <strong>Project Planning:</strong> - Define project milestones,
            timelines, and resource requirements. - Create a project plan with
            clear tasks and dependencies.
          </li>
          <li>
            <strong>Team Formation:</strong> - Assemble a skilled and
            well-balanced project team. - Assign roles and responsibilities to
            team members.
          </li>
        </ul>
        <H3Heading>
          <strong>Design:</strong>
        </H3Heading>
        <ul>
          <li>
            <strong>System Architecture:</strong> - Develop the overall system
            architecture and design. - Define data models, components, and their
            interactions.
          </li>
          <li>
            <strong>
              User Interface (UI) and User Experience (UX) Design:
            </strong>{" "}
            - Design a user-friendly interface based on client requirements. -
            Ensure a positive user experience throughout the application.
          </li>
          <li>
            <strong>Database Design:</strong> - Create a robust database schema
            that aligns with the application&apos;s requirements. - Define data
            storage and retrieval mechanisms.
          </li>
        </ul>
        <H3Heading>
          <strong>Development:</strong>
        </H3Heading>
        <ul>
          <li>
            <strong>Coding:</strong> - Write code according to coding standards
            and best practices. - Implement features iteratively based on the
            development plan.
          </li>
          <li>
            <strong>Version Control:</strong> - Use version control systems
            (e.g., Git) to manage code changes. - Ensure proper documentation
            and commit messages.
          </li>
          <li>
            <strong>Testing:</strong> - Conduct unit testing to identify and fix
            bugs early in the development process. - Perform integration testing
            to validate the interactions between different components.
          </li>
        </ul>
        <H3Heading>
          <strong>Testing and Quality Assurance:</strong>
        </H3Heading>
        <ul>
          <li>
            <strong>Functional Testing:</strong> - Verify that the software
            meets the specified functional requirements. - Identify and rectify
            any defects or issues.
          </li>
          <li>
            <strong>Performance Testing:</strong> - Evaluate the
            application&apos;s performance under various conditions. - Optimize
            for speed, scalability, and reliability.
          </li>
          <li>
            <strong>Security Testing:</strong> - Conduct security assessments to
            identify and address vulnerabilities. - Implement security best
            practices.
          </li>
        </ul>
        <H3Heading>
          <strong>Deployment:</strong>
        </H3Heading>
        <ul>
          <li>
            <strong>Release Management:</strong> - Plan and execute a controlled
            release of the software. - Provide necessary training and
            documentation for end-users.
          </li>
          <li>
            <strong>Monitoring and Maintenance:</strong> - Implement monitoring
            tools to track system performance. - Provide ongoing support,
            addressing issues, and releasing updates as needed.
          </li>
        </ul>
        <H3Heading>
          <strong>Project Closure:</strong>
        </H3Heading>
        <ul>
          <li>
            <strong>Client Acceptance:</strong> - Obtain client feedback and
            ensure satisfaction. - Confirm that all requirements have been met.
          </li>
          <li>
            <strong>Documentation:</strong> - Create comprehensive documentation
            for the project, including user manuals and technical documentation.
          </li>
          <li>
            <strong>Post-Implementation Review:</strong> - Evaluate the
            project&apos;s success and identify areas for improvement. - Capture
            lessons learned for future projects.
          </li>
        </ul>
        <p>
          By following a structured approach and adapting as needed, we deliver
          high-quality, tailored solutions that meet the unique needs of yours.
        </p>
      </>
    ),
    description: (
      <>
        <H2Heading>
          Turning&nbsp;
          <span className="text-theme">Ideas into Impact</span>: Agile
          Innovation, Impeccable Solutions – Our Software Development Signature
        </H2Heading>
        <p>
          At <strong className="text-theme">Magic</strong>Plug, we pride
          ourselves on being more than just a software development company—we
          are your dedicated partners in bringing your unique vision to
          fruition. Our work approach is centered around crafting tailored
          solutions that precisely match your business objectives and
          challenges.
        </p>
        <p>
          Our approach is anchored in Agile development, ensuring a dynamic and
          collaborative journey to your unique needs.
        </p>
        <p>
          Why <strong>Agile</strong>?
        </p>
        <ul>
          <li>
            <strong>Adaptability</strong>: Embrace changes and evolving
            requirements at any stage of the project.
          </li>
          <li>
            <strong>Transparency</strong>: Regular updates and feedback loops
            keep you informed and in control.
          </li>
          <li>
            <strong>Efficiency</strong>: Rapid iterations ensure swift delivery
            of valuable, high-quality features.
          </li>
        </ul>
      </>
    ),
    image: {
      src: "/assets/image/services/agile.png",
      width: 2000,
      height: 2000,
      isInline: true,
    },
    mainPage: true,
    pageTitle: "How we work",
    show: true,
    slug: {
      path: "/how-we-work",
      title: "How We Work",
    },
  },
  {
    content: (
      <>
        <p>
          Building a website involves a series of steps and the utilization of
          various technologies to create a functional and visually appealing
          online presence. Below is a general overview of the technologies and
          assets we used:
        </p>
        <H3Heading>Tech Stack:</H3Heading>
        <ul>
          <li>
            <CustomLink href="https://nextjs.org/">Next.js (v14)</CustomLink>
          </li>
          <li>
            <CustomLink href="https://www.typescriptlang.org/">
              TypeScript
            </CustomLink>
          </li>
          <li>
            <CustomLink href="https://tailwindcss.com/">
              Tailwind CSS
            </CustomLink>
          </li>
          <li>
            <CustomLink href="https://gsap.com/">
              GSAP for Animations
            </CustomLink>
          </li>
          <li>
            <CustomLink href="https://lenis.studiofreight.com/">
              Lenis for Smooth Scrolling
            </CustomLink>
          </li>
          <li>
            <CustomLink href="https://www.sanity.io/">Sanity CMS</CustomLink>
          </li>
        </ul>
        <H3Heading>Attributions:</H3Heading>
        <ul>
          <li>
            <CustomLink href="https://storyset.com/">
              Illustrations by StorySet
            </CustomLink>
          </li>
          <li>
            <CustomLink href="https://lottiefiles.com/">
              Lottie from LottieFiles
            </CustomLink>
          </li>
          <li>
            <CustomLink href="https://www.svgrepo.com/">
              SVGs from SVGRepo
            </CustomLink>
          </li>
        </ul>
      </>
    ),
    show: true,
    slug: {
      path: "/about-this-website",
      title: "About this website",
    },
  },
];

export type PAGE_DATA_TYPE = (typeof PAGE_DATA)[number];

export const getPageData = (slug: string) => {
  return PAGE_DATA.find((item) => item.slug.path === `/${slug}`);
};
