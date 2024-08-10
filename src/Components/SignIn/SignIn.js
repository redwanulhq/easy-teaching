import React from 'react';
import './SignIn.css'

const SignIn = () => {
     return (
          <div className="form">
               <div class="form-container" id="one">
                    <form action="#">
                         <input class="input" type="text" placeholder="User Name" />
                         <input class="input" type="password" placeholder="Password" />
                         <input class="loginbtn" type="submit" value="Log In" />
                    </form>
               </div>
          </div>
     );
};

export default SignIn;