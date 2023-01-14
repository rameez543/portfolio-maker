import React, { Component } from 'react';
const colors = ['#FFFFFF', '#f7a6a8', '#eba6f7', '#bda6f7', '#a6b9f7', '#a6f2f7', '#a6f7cc', '#b5f7a6', '#f7f3a6', '#f7d4a6']
export default  class Resume extends Component {
  constructor(props){
    super(props)
    this.state={color:'',
                prevPos:window.pageYOffset    }
  }
  getColor(){
    const pos = colors.indexOf(this.state.color) + 1 < colors.length - 1 ? colors.indexOf(this.state.color) + 1 : 0
    return  colors[pos]
  }
  handleScroll=()=>{
  const {prevPos}=this.state 
  const currentPos=window.pageYOffset
    if(Math.abs(currentPos-prevPos)>30){
      const color=this.getColor()
      this.setState({prevPos:currentPos,color:color})
    }

  }
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
  }
  render() {
    let resumeData = this.props.resumeData;
    let {color}=this.state
    return (
      <section id="resume" style={{background: color}}>

         
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements.map(ite=>{
                            return(<ul>
                              <li>{ite}</li>
                            </ul>)
                            
                          })}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span style={{width:`${item.level}%`}} className={`bar-expand `}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>
         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>

      </section>
    );
  }
}