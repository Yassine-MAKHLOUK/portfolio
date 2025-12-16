import { component$ } from '@builder.io/qwik';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiPhp,
  SiSpringboot,
  SiAngular,
  SiJira,
  SiNotion,
  SiTrello,
  SiWordpress
} from '@qwikest/icons/simpleicons';

export default component$(() => {
  const skills = [
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'React', icon: SiReact },
    { name: 'Angular', icon: SiAngular },
    { name: 'Nextjs', icon: SiNextdotjs },
    { name: 'PHP', icon: SiPhp },
    { name: 'Spring boot', icon: SiSpringboot },
    { name: 'MySQL', icon: SiMysql },
    { name: 'PostgresSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Docker', icon: SiDocker },
    { name: 'WordPress', icon: SiWordpress },
    { name: 'Notion', icon: SiNotion },
    { name: 'Jira', icon: SiJira },
    { name: 'Trello', icon: SiTrello },
    { name: 'Git', icon: SiGit }
  ];

  // Remove the useVisibleTask as we're handling the loop in the JSX

  return (
    <section class="skills-section py-8 mb-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="h1 skills-title flex flex-col items-center justify-center">Technical Skills
           <span class="text-xl text-white">Technologies and tools I work with</span> 
          </h2>
          
        </div>
        
        <div class="relative overflow-hidden bg-transparent">
          <div class="skills-slider flex animate-scroll hover:[animation-play-state:paused]">
            {/* First set of skills */}
            {skills.map((skill, index) => (
              <div key={`first-${index}`} class="skill-item flex-none w-24 h-24 mx-4 bg-grey-800 rounded-xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div class="w-12 h-12">
                  <skill.icon class="w-full h-full text-gray-600 hover:text-white" />
                </div>
                {/* Hidden for now */}
                <div class="skill-name hidden">{skill.name}</div>
              </div>
            ))}
            {/* Duplicate set of skills for seamless loop */}
            {skills.map((skill, index) => (
              <div key={`second-${index}`} class="skill-item flex-none w-24 h-24 mx-4 bg-grey-800 rounded-xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div class="w-12 h-12">
                  <skill.icon class="w-full h-full text-gray-400 hover:text-white" />
                </div>
                {/* Hidden for now */}
                <div class="skill-name hidden">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});