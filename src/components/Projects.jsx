import SectionTitle from "./SectionTitle";
import {projects} from "../assets/data";
import ProjectCard from "./ProjectCard";
const Projects = () => {

    return <section className="py-20 align-element" id="projects">
    <div>
        <SectionTitle text="Web Projects"/>
    </div>
    <div className="py-20 grid gap-8 lg:grid-cols-3 md:grid-cols-2">
     {projects.map((i,index)=>
           <ProjectCard key={index} {...i} />
     )}
    </div>
</section>
}

export default Projects;