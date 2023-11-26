import BorderBox from "../BorderBox"
import Title from "../Title"

const AboutMe = () => (
  <>
    <BorderBox>

      <Title>
        About me
      </Title>

      <p>
        I am a Software Engineer and C# / .NET Developer currently pursuing Engineer's Degree in Computer Science at Lodz University of Technology. I'm a person who loves to code and get known with new technologies, but I think that's obvious to you. Beside that I am in love with PlayStation and playing video games. I really enjoy doing Calisthenics. I am also into Cars, mainly Porsche.
      </p>

      <div className="flex space-x-5 font-medium mt-3">

        <a className="hover:text-primary" href="https://www.linkedin.com/in/jaqubm/" target="_blank">
          LinkedIn ↗
        </a>

        <a className="hover:text-primary" href="https://github.com/jaqubm" target="_blank">
          GitHub ↗
        </a>

      </div>

    </BorderBox>
  </>
)

export default AboutMe