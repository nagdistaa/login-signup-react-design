import { LockKeyhole, Mail, User } from "lucide-react";
import "./LoginSignup.css"
import { useState } from "react";
interface Iprops {

}


const LoginSignup = ({ }: Iprops) => {

    const [action , setAction] = useState("sign up")
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
               {action=="login"?null : <div className="input">
                    <span><User /></span>
                    <input type="text" name="" id="" placeholder="Mhmoud Alnagdy"/>
                </div>}
                {/* 2 */}
                <div className="input">
                    <span><Mail /></span>
                    <input type="email" name="email" id="email" placeholder="nagdista@gmail.com"/>
                </div>
                {/* 3 */}
                <div className="input">
                    <span><LockKeyhole /></span>
                    <input type="password" name="password" id="password"  placeholder="*******"/>
                </div>
            </div>
           {action =="sign up"?null : <div className="forgot-password">
                forget password ? <span>click here</span>
            </div>}
            <div className="submit-container">
                <div className={action =="login" ? "submit gray":"submit"} onClick={()=>{
                    setAction("sign up")
                }}>sign up</div>
                <div className={action =="sign up" ? "submit gray":"submit"} onClick={()=>{
                    setAction("login")
                }}>login</div>
            </div>
        </div>
    )
}

export default LoginSignup; 