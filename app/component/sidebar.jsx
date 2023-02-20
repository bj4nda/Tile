import Image from "next/image"
import React from "react"
import {Twitter, Envelope, Medium, Linkedin} from "./icons/"

const Sidebar = ({data}) => {
  const {name, role, education, contactLinks} = data
  return (
    <div className="bg-black flex flex-col  content-between w-full h-auto sm:justify-around sm:w-1/3 sm:fixed sm:h-screen ">
      <div className="text-white flex flex-col p-10 items-center">
        <Image
          priority
          width={300}
          height={300}
          className="rounded-full h-full mb-6"
          src="/images/julian-wan-WNoLnJo7tS8-unsplash.jpg"
          alt="julian-wan-WNoLnJo7tS8-unsplash.jpg"
          aria-label="julian-wan-WNoLnJo7tS8-unsplash.jpg"
        />
        <h1 className="mb-2">{name}</h1>
        <h2 className="mb-8">{role}</h2>
        <p className="mb-2">{education[0]}</p>
        <p className="mb-2">{education[1]}</p>
        <div className="text-white text-center mb-4 mt-4 sm:mt-8">
          <h3 className="mb-2">contact me</h3>
          <div className="flex flex-row justify-center gap-2 ">
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label={"envelope link"}
            >
              <Envelope />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[1]}
              aria-label={"twitter link"}
            >
              <Twitter />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[2]}
              aria-label={"medium link"}
            >
              <Medium />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label={"linkedin link"}
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
