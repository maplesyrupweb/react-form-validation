/*-------------------------------------------------------------------
|  🐼 React FC Navigation
|
|  🐯 Purpose: TOP NAVIGATION BAR
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import React from 'react'
import { BsEnvelope, BsGithub, BsLinkedin, BsTwitter, BsFillTelephoneFill } from 'react-icons/bs'

export const Navigation = () => {
  return (
    <div className="border-b bg-slate-100">
      <nav className="container flex justify-between items-center">
        <div className="font-semibold">React Forms</div>
        <div className="flex items-center gap-4 text-lg">
          <a href="https://github.com/" target="_blank">
            <BsGithub />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <BsTwitter />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <BsLinkedin />
          </a>
          <a href="mailto:someone@example.com" target="_blank">
            <BsEnvelope />
          </a>
          <a href="tel:+16042222222" target="_blank">
            <BsFillTelephoneFill />
          </a>
        </div>
      </nav>
    </div>
  )
}
