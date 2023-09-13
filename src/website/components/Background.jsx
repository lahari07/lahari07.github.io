import '../css/responsivebackground.css'

export default function Background(props){
    const {classes} = props
    return(
        <div className="background">
            <div className={classes.innerYellow}></div>
            <div className={classes.outerYellow}></div>
            <div className={classes.innerGray}></div>
            <div className={classes.outerGray}></div>
        </div>
    )
}