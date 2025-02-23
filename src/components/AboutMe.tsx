import BorderBox from "./ui/BorderBox.tsx"
import Title from "./ui/Title.tsx"

const AboutMe = () => (
  <>
    <BorderBox>

      <Title>
        About me
      </Title>

      <p>
        I'm a Software Engineer currently working as an AI Engineer at P&G, recent graduate of Engineering Degree in Computer Science at Lodz University of Technology. Person who loves to code and get known with new technologies. Beside that I am in love with PlayStation and playing video games. I really enjoy doing Calisthenics and I'm also into Cars, mainly Porsche.
      </p>

      <div className="flex space-x-5 font-medium mt-3">

        <a className="group hover:text-primary" href="https://www.linkedin.com/in/jaqubm/" target="_blank">
          LinkedIn&nbsp;
            <svg className="inline-block fill-text transition-transform group-hover:fill-primary group-hover:-translate-y-1 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
            </svg> 
        </a>

        <a className="group hover:text-primary" href="https://github.com/jaqubm" target="_blank">
          GitHub&nbsp;
          <svg className="inline-block fill-text transition-transform group-hover:fill-primary group-hover:-translate-y-1 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
          </svg> 
        </a>

      </div>

    </BorderBox>
  </>
)

export default AboutMe