import React from 'react'

function Skillbar() {
    function SkillInfo({ per, name, }) {
        let percent = `${per}%`
        return (
            <div>
                <div className="skills">
                    <div className="skill">
                        <div className="skill-name css">{name}</div>
                        <div className="skill-bar css-bar">
                            <div className="skill-per" per={percent} style={{ maxWidth: percent }}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    const info =
        [
            {   
                id: 1,
                name: 'HTML',   
                per: 90
            },
            {   
                id: 2,
                name: 'CSS',
                per: 70
            },
            {   
                id: 3,
                name: 'JS',
                per: 60
            },
            {   
                id: 4,
                name: 'react',
                per: 50
            }
        ]
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
