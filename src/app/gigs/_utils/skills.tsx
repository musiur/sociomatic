import FadeInOnScroll from "@/components/anims/fadein-onscroll";

const Skills = () => {
    return (
        <div className="max-w-[600px]">
            <h3 className="text-lg font-bold">Skills</h3>
            <ul className="flex flex-wrap gap-2 pt-3">
              {skills.map((item) => {
                return (
                  <li key={item}>
                    <FadeInOnScroll>
                      <div className="px-4 py-1 rounded-full bg-gray-100 border">
                        {item}
                      </div>
                    </FadeInOnScroll>
                  </li>
                );
              })}
            </ul>
          </div>
    )
}

export default Skills;


const skills = [
    "Social Media Marketing",
    "Facebook Ads",
    "On-page SEO",
    "Google Tag Manager",
    "Google Analytics",
    "Digital Marketing",
    "SEO",
    "Social Media Management",
    "Wordpress",
    "Shopify",
    "Custom Web Development",
    "Google Ads",
    "UI/UX",
  ];