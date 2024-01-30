import React from 'react'
import './CSS/LogInSignUp.css'
import { useRef, useState, useEffect } from 'react'
import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link} from 'react-router-dom'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\]:;<>,.?~\\-]).{8,}$/;

function LogInSignUp() {
    const userRef = useRef()
    const errRef = useRef()

    const [user,setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)
    
    const [pwd,setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd,setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success,setSuccess] = useState(false)

    useEffect(()=>{
        const result = USER_REGEX.test(user);
        console.log(result)
        console.log(user)
        setValidName(result)
    },[user])

    useEffect(()=>{
        const result = PASSWORD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    },[pwd,matchPwd])

    useEffect(()=>{
        setErrMsg('')
    },[user,pwd,matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: user,
                password: pwd,
              }),
            });
        
            const data = await response.json();
        
            if (response.ok) {
              setSuccess(true);
              setErrMsg('User Registered Successfully');
              // Redirect or perform other actions upon successful registration
            } else {
              setSuccess(false);
              setErrMsg(data.error || 'Registration failed');
            }
          } catch (error) {
            console.error(error);
            setSuccess(false);
            setErrMsg('Registration failed');
          }
        };

  return (
    <>
    {!success ?
    (<section>
      <div className="container">
        <div className="row mt-5">
            <div className="col-lg-6 m-auto main-container">
                <div className='row'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
                </div>
                <div className='row'>
                    <h1 className='text-center'>Register</h1>
                    <form onSubmit={handleSubmit}>
                    {/*user*/}
                    <label htmlFor="username" className='mb-3'>User Name:
                        <span className={validName?"valid":"hide"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                        <span className={validName || !user ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </span>
                    </label><br/>
                    <input 
                        type="text"
                        id='username'
                        ref={userRef}
                        autoComplete='off'
                        onChange={(e) => setUser(e.target.value)}
                        required
                        aria-invalid = {validName ? "false" : "true"}
                        aria-describedby='uidnote'
                        onFocus={()=>setUserFocus(true)}
                        onBlur={()=>setUserFocus(false)}
                        className='input-field mb-3'
                    />
                    <p id='uidnote' className={userFocus && user && !validName ? 'instruction' : 'offscreen'}>
                        <FontAwesomeIcon icon={faInfoCircle}/><br/>
                        Username is between 3 and 20 characters<br/>
                        Must begin with a letter<br/>
                        Allows alphanumeric characters and underscores
                    </p>
                    {/*password*/}
                    <label htmlFor="password" className='mb-3'>Password:
                        <span className={validPwd?"valid":"hide"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                        <span className={validPwd || !pwd ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </span>
                    </label><br/>
                    <input 
                        type="password"
                        id='password'
                        onChange={(e) => setPwd(e.target.value)}
                        required
                        aria-invalid = {validPwd ? "false" : "true"}
                        aria-describedby='pwdnote'
                        onFocus={()=>setPwdFocus(true)}
                        onBlur={()=>setPwdFocus(false)}
                        className='input-field mb-3'
                    />
                    <p id='pwdnote' className={pwdFocus && pwd && !validPwd ?'instruction':'offscreen'}>
                        <FontAwesomeIcon icon={faInfoCircle}/><br/>
                        Password is minimum 8 character<br/>
                        Requires at least one special character<br/>
                        Requires at least one digit.<br/>
                        Requires at least one uppercase letter.<br/>
                        Requires at least one lowercase letter.<br/>
                    </p>
                    {/*confirm password*/}
                    <label htmlFor="confirm_pwd" className='mb-3'>Confirm Password:
                        <span className={validMatch && matchPwd ?"valid":"hide"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                        <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </span>
                    </label><br/>
                    <input 
                        type="password"
                        id='confirm_pwd'
                        onChange={(e) => setMatchPwd(e.target.value)}
                        required
                        aria-invalid = {validMatch ? "false" : "true"}
                        aria-describedby='confirmnote'
                        onFocus={()=>setMatchFocus(true)}
                        onBlur={()=>setMatchFocus(false)}
                        className='input-field mb-3'
                    />
                    <p id='confirmnote' className={matchFocus && !validMatch ?'instruction':'offscreen'}>
                        <FontAwesomeIcon icon={faInfoCircle}/><br/>
                        Must match the first password input field
                    </p>
                    <button disabled={!validName || !validMatch || !validPwd ? true : false} className='btn btn-success mb-3'>Submit</button>
                    </form>
                    <p className='text-center'> Already registered ? <br/>
                    <Link to={'/login'}>Sign In</Link>
                    </p>
                </div>
                
            </div>
        </div>
      </div>
    </section>):(<section>
        <div className='container'>
            <div className='row mt-5'>
                <div className="col-lg-6 m-auto main-container p-3">
                    <p>You are successfully registered now.</p>
                    <p>Please log in now.</p>
                    <Link to={'/login'}>LogIn Here</Link>
                </div>
            </div>
        </div>
    </section>)}
    </>
  )
}

export default LogInSignUp

