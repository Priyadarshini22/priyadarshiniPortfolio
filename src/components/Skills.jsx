import SectionTitle from "./SectionTitle"
import {skills} from "../assets/data";
import SkillCard from "./SkillCard";
const Skills = () => {

    return <section className="py-20 align-element" id="skills">
        <div>
            <SectionTitle text="Tech Stack"/>
        </div>
        <div className="py-20 grid gap-8 lg:grid-cols-3 md:grid-cols-2">
         {skills.map((i,index)=>
               <SkillCard key={index} {...i} />
         )}
        </div>
    </section>
}

export default Skills