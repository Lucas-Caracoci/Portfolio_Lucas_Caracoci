import React from 'react'

function Skillbar() {
    function SkillInfo({ per, name, }) {
        let percent = `${per}%`
        return (
            <div>
                <div className="skills">
                    <div className="skill">
                        <div className={`skill-name ${name.toLowerCase()}`}>{name}</div>
                        <div className={`skill-bar ${name.toLowerCase()}-bar`}>
                            <div className="skill-per" per={percent} style={{ maxWidth: percent }}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    const info = [
        { id: 1, name: 'CSS', per: 80 },
        { id: 2, name: 'Git', per: 70 },
        { id: 3, name: 'JS', per: 60 },
        { id: 4, name: 'React', per: 60 }
        
    ];
  return (
    <div>
      {info.map(item => {
                    return (
                        <SkillInfo key={item.id} name={item.name} per={item.per} />
                    )
                })}
    </div>
  )
}

export default Skillbar
