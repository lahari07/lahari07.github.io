// import '../../css/work.css'
import '../../css/responsivework.css'
import { forwardRef } from 'react'

const Work = forwardRef(function(props, ref){
    return(
        <div className={props.containerClass} ref={ref}>
        <div className='work-section-animation-container'>
            <div className='heading-container'>
                <p className='heading'>Work</p>
            </div>
            <div className='work-nav-container'>
                {/* <div className='work-nav-items-container'>
                    <p className='intuit-nav work-nav-item' onClick={() => props.intuitRef.current.scrollIntoView()}>
                        Intuit •
                    </p>
                    <p className='esorus-nav work-nav-item' onClick={() => props.esorusRef.current.scrollIntoView()}>
                        Esorus •
                    </p>
                    <p className='infosys-nav work-nav-item' onClick={() => props.infosysRef.current.scrollIntoView()}>
                        Infosys •
                    </p>
                </div> */}
                <div className='work-nav-items-container'>
                    <p className='intuit-nav work-nav-item'>
                        Intuit •
                    </p>
                    <p className='esorus-nav work-nav-item'>
                        Esorus •
                    </p>
                    <p className='infosys-nav work-nav-item'>
                        Infosys •
                    </p>
                </div>
            </div>
        </div>

    </div>
    )
})

export default Work