import '../css/main.css'
import { useState, useRef, useEffect } from 'react'
import Background from './Background.jsx'
import Work from './work/Work.jsx'
import WorkExp from './work/WorkExp'
import Projects from './projects/Project.jsx'
import Contact from './contact/Contact.jsx'

function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      );
  
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
}

export default function Main(){
    const aboutRef = useRef()
    const aboutVisibility = useIsVisible(aboutRef)

    const workRef = useRef()
    const workVisibility = useIsVisible(workRef)

    const intuitRef = useRef()
    const intuitVisibility = useIsVisible(intuitRef)

    const esorusRef = useRef()
    const esorusVisibility = useIsVisible(esorusRef)

    const infosysRef = useRef()
    const infosysVisibility = useIsVisible(infosysRef)

    const projectRef = useRef()
    const projectVisibility = useIsVisible(projectRef)

    const contactRef = useRef()
    const contactVisibility = useIsVisible(contactRef)

    const classes = {
        about: {
            innerYellow:'circle-yellow',
            outerYellow:'circle-yellow-outer',
            innerGray:'circle-gray',
            outerGray:'circle-gray-outer',
        },
        work: {
            innerYellow:'circle-yellow cy-work',
            outerYellow:'circle-yellow-outer cyo-work',
            innerGray:'circle-gray cg-work',
            outerGray:'circle-gray-outer cgo-work',
        },
        intuit: {
            innerYellow:'circle-yellow cy-intuit',
            outerYellow:'circle-yellow-outer cyo-intuit',
            innerGray:'circle-gray cg-intuit',
            outerGray:'circle-gray-outer cgo-intuit',
        },
        esorus: {
            innerYellow:'circle-yellow cy-esorus',
            outerYellow:'circle-yellow-outer cyo-esorus',
            innerGray:'circle-gray cg-esorus',
            outerGray:'circle-gray-outer cgo-esorus',
        },
        infosys: {
            innerYellow:'circle-yellow cy-infosys',
            outerYellow:'circle-yellow-outer cyo-infosys',
            innerGray:'circle-gray cg-infosys',
            outerGray:'circle-gray-outer cgo-infosys',
        },
        project:{
            innerYellow:'circle-yellow cy-project',
            outerYellow:'circle-yellow-outer cyo-project',
            innerGray:'circle-gray cg-project',
            outerGray:'circle-gray-outer cgo-project',
        },
        contact:{
            innerYellow:'circle-yellow cy-contact',
            outerYellow:'circle-yellow-outer cyo-contact',
            innerGray:'circle-gray cg-contact',
            outerGray:'circle-gray-outer cgo-contact',
        }
    }

    const work_experience ={
            intuit:{
                company:'INTUIT',
                key_points: ['Led the development of the Statements widget in QuickBooks from scratch using React', 
                             'Optimized automation test suits in Cypress to execute faster', 
                             'Migrated widgets from Dojo to React', 
                             'Communicate with multi-disciplinary teams of designers, product managers, and engineers on a daily basis', 
                             'Interviewed veteran Quickbooks users to improve the UX on the page'],
                link:'https://quickbooks.intuit.com/',
                technologies:['React', 'JavaScript', 'Cypress', 'Jest','GraphQL', 'Dojo', 'Git', 'Jira','Splunk', 'HTML', 'CSS', 'Figma']
            },
            esorus:{
                company:'ESORUS',
                key_points: [],
                link:'https://esorus.com/',
                technologies:[],
            },
            infosys:{
                company:'INFOSYS',
                key_points: [],
                link:'https://www.infosys.com/',
                technologies:[],
            }
        }

    return(
        <div className='full-page'>
            <div className='nav-bar-container'>
                {/* <p className={aboutVisibility ? (workVisibility ? 'nav-items item-1' : 'nav-items item-1 selected-nav') : 'nav-items item-1'} 
                    onClick={() => aboutRef.current.scrollIntoView()}>
                    ABOUT 
                    <span className='dot'>•</span>
                </p> */}
                <p className={workVisibility || intuitVisibility || esorusVisibility || infosysVisibility? (projectVisibility ? 'nav-items item-2' : 'nav-items item-2 selected-nav') : 'nav-items item-2'}  
                    onClick={() => workRef.current.scrollIntoView()}>
                    WORK 
                    <span className='dot'>•</span>
                </p>
                <p className={projectVisibility ? (contactVisibility ? 'nav-items item-3' : 'nav-items item-3 selected-nav') : 'nav-items item-3'}  onClick={() => projectRef.current.scrollIntoView()}>
                    PROJECTS 
                    <span className='dot'>•</span>
                </p>
                <p className={contactVisibility ? 'nav-items item-4 selected-nav' : 'nav-items item-4'}  onClick={() => contactRef.current.scrollIntoView()}>
                    CONTACT 
                    <span className='dot'>•</span>
                </p>
            </div>
            <Background 
            classes={ (contactVisibility && classes.contact) ||
                      (projectVisibility && classes.project) ||
                      (infosysVisibility && classes.infosys) ||
                      (esorusVisibility && classes.esorus) ||
                      (intuitVisibility && classes.intuit) ||
                      (workVisibility && classes.work) ||
                      (aboutVisibility && classes.about)}/>
                      
            <div className="main-container">
                <div className={workVisibility ? "about-section about-disable" : "about-section"} ref={aboutRef}>
                    <div className='content-container'>
                       <div className='name-container'>
                            <p className='heading'>About me</p>
                       </div>
                       <div className='about-content-container'>
                            <p className='about-content'>
                                I am a recent Computer Science graduate with a passion for software development.
                                I love bringing interactive web designs to life and working with captivating 3D models. 
                                I am eager to scale up my contributions and am actively seeking opportunities to work for a company 
                                with the goal of contributing to the web community 
                            </p>
                       </div>
                    </div>
                </div>
                <Work ref={workRef} containerClass={intuitVisibility ? "work-section work-disable" : "work-section"} intuitRef={intuitRef} esorusRef={esorusRef} infosysRef={infosysRef}/>
                {/* <IntuitExp ref={intuitRef} containerClass={esorusVisibility ? "intuit-exp-section intuit-exp-disable" : "intuit-exp-section"}/>
                <EsorusExp ref={esorusRef} containerClass={infosysVisibility ? "esorus-exp-section esorus-exp-disable" : "esorus-exp-section"}/>
                <InfosysExp ref={infosysRef} containerClass={projectVisibility ? "infosys-exp-section infosys-exp-disable" : "infosys-exp-section"}/> */}
                <WorkExp ref={intuitRef} containerClass={esorusVisibility ? "exp-section exp-disable" : "exp-section"} experience={work_experience.intuit} containerColor="int-container-bg"/>
                <WorkExp ref={esorusRef} containerClass={infosysVisibility ? "exp-section exp-disable" : "exp-section"} experience={work_experience.esorus} containerColor="eso-container-bg"/>
                <WorkExp ref={infosysRef} containerClass={projectVisibility ? "exp-section exp-disable" : "exp-section"} experience={work_experience.infosys} containerColor="inf-container-bg"/>
                <Projects ref={projectRef} containerClass={contactVisibility ? "project-section project-disable" : "project-section"}/>
                <Contact ref={contactRef} containerClass="contact-section"/>
            </div>
        </div>
    )
}