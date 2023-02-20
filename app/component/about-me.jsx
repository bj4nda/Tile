import React, {useId} from "react"
import Skills from "./skills"

const AboutMe = ({data}) => {
  const {title, body} = data
  const id = useId()
  return (
    <section>
      <h2 className="mb-8">{title}</h2>
      {body?.map((elem, idx) => (
        <p key={`${id}_${idx}`} className="mb-6">
          {elem}
        </p>
      ))}
      <Skills />
    </section>
  )
}

export default AboutMe
