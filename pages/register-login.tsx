/* globals window */
import React, { useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { getApp } from 'firebase/app'
import initAuth from '../initAuth'
import { app, authApp } from '../firebase/firebase.config'
import { AuthAction, withAuthUser } from 'next-firebase-auth'
import style from '../styles/RegisterLogin.module.css'
// Note that next-firebase-auth inits Firebase for us,
// so we don't need to.
initAuth()
const firebaseAuthConfig = {
  signInFlow: 'popup',
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    {
      provider: GoogleAuthProvider.PROVIDER_ID,
      // requireDisplayName: false,
    },
  ],
  signInSuccessUrl: '/dashboard',
  credentialHelper: 'none',
  callbacks: {
    // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
    signInSuccessWithAuthResult: () =>
      // Don't automatically redirect. We handle redirects using
      // `next-firebase-auth`.
      false,
  },
}
const Auth = () => {
  const [renderAuth, setRenderAuth] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true)
    }
  }, [])
  return (
    <div className='flex h-[100vh]'>
      <div className={style.division}>
      {/* <div className='h-[100vh] grid place-content-center p-20 w-[50%] bg-principal rounded-r-lg'> */}
        <div className='text-slate-200'>
          <div>
            <h1 className='text-3xl font-semibold capitalize'>flashcard study</h1>
          </div>
          <p className='text-2xl font-semibold'>Te damos la bienvenida a una aplicacion simple pero efectiva para estudio </p>
          <ul className='mt-3 text-xl font-semibold grid gap-3'>
            <li>
              crea y estudia flashcards
            </li>
            <li>
              organizate y enfocate
            </li>
          </ul>
        </div>
      </div>
      <div className=' bg-principal grid place-content-center w-[80%]'>
        <h3 className='pl-5 capitalize text-2xl font-semibold text-slate-200'>inicia sesion</h3>
        {renderAuth ? (
          <StyledFirebaseAuth
            uiConfig={firebaseAuthConfig}
            firebaseAuth={getAuth(app)}
          // firebaseAuth={firebase.auth()}
          />
        ) : null}
      </div>
    </div>
  )
}
export default withAuthUser({
  // whenUnauthedAfterInit:AuthAction.REDIRECT_TO_APP
  whenAuthed: AuthAction.REDIRECT_TO_APP
})(Auth)