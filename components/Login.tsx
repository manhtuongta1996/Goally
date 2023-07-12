"use client"
import React from 'react'
import {signIn} from "next-auth/react"

function Login() {
  return (
    <button onClick={() => signIn()}>Sign in</button>
  )
}

export default Login