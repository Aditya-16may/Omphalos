import Avatar1 from "../assets/avatar1.jpg"
import Avatar2 from "../assets/avatar2.jpg"
import Avatar3 from "../assets/avatar3.jpg"
import circle1 from "../assets/circle1.png"
import circle2 from "../assets/circle2.png"
import circle3 from "../assets/circle3.png"
import "../style/avatar.css"
import "../style/global.css"

export default function Avatar() {
  return (
    <div className="layout">
        <div className="left-column">
            <div className="sidebar">
                <img src={Avatar1} alt="avatar" className="images" />
                <div className="info">
                    <h2>Username</h2>

                    <div className="stats">
                        <span>XP :</span>
                        <div className="stat-bar-bg">
                            <div className="stat-bar-fill">
                            <p>40</p>
                            </div>
                        </div>
                    </div>

                    <p>Gender :</p>
                    <p>Rank :</p>
                    <p className="bio">
                    Bio : A healthy schedule results in healthy lifestyle.
                    A healthy lifestyle brings you closer to NIRVANA.
                    </p>
                </div>
            </div>

            <div className="Avatar-list">
                <div className="cover">
                    <div className="Hall">
                        <h2>Ranking:</h2>

                        <div className="Gallery">
                            <div className="profile">
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem"}}>
                                    <img src={Avatar1} alt="avatar" className="images" />
                                    <p>Aman Verma</p>
                                </div>
                                <p>XP : 900</p>
                            </div>
                            <div className="profile">
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem"}}>
                                    <img src={Avatar2} alt="avatar" className="images" />
                                    <p>Sanchit Kumar Bharti</p>
                                </div>
                                <p>XP : 850</p>
                            </div>
                            <div className="profile">
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem"}}>
                                    <img src={Avatar3} alt="avatar" className="images" />
                                    <p>Abhishek Bairwa</p>
                                </div>
                                <p>XP : 700</p>
                            </div>
                            <div className="profile">
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem"}}>
                                    <img src={Avatar1} alt="avatar" className="images" />
                                    <p>Amit Shah</p>
                                </div>
                                <p>XP : 600</p>
                            </div>
                            <div className="profile">
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem"}}>
                                    <img src={Avatar3} alt="avatar" className="images" />
                                    <p>Adirij Sarkar</p>
                                </div>
                                <p>XP : 500</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="left-column">
            <div className="Avatar-list">
                <div className="cover">
                    <div className="Hall">
                        <h2>Avatars</h2>

                        <div className="Gallery">
                            {[Avatar1, Avatar2, Avatar3, Avatar1, Avatar1, Avatar1,
                                Avatar1, Avatar1, Avatar1, Avatar1, Avatar1, Avatar1,
                                Avatar1, Avatar1, Avatar1, Avatar1, Avatar1, Avatar1
                            ].map((img, index) => (
                                <div className="cards" key={index}>
                                <img src={img} alt="avatar" className="images"/>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <img src={circle1} alt="circle" className="circles"></img>
                <img src={circle2} alt="circle" className="circles"></img>
                <img src={circle3} alt="circle" className="circles"></img>
            </div>
            <div>
                <div className="bar">
                    <div className="fill">
                    </div>
                </div>
            </div>
        </div>                
    </div>
  );
}
