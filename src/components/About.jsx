import SectionTitle from "./SectionTitle";
import aboutSvg from "../assets/about.svg";

const About = () => {

       return <section className="bg-white py-20" id="about">
        <div className="align-element grid md:grid-cols-2 items-center gap-16">
            <img src={aboutSvg} className="w-full h-64"/>   
        <article>
            <SectionTitle text={"code and coffee"}/>
            <p className='text-slate-600 mt-8 leading-loose'>
            I have 2.5 years of experience as a Software Developer. I have experience working in both an MNC and a startup. I am good enough to handle the task assigned to me. 
            </p>
        </article>
        </div>

       </section>

}

export default About;