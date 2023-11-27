import BorderBox from "../BorderBox"
import Title from "../Title"
import Skill from "../Skill"

const Skills = () => (
  <>
    <BorderBox>

      <Title>
        Skills
      </Title>

      <div className="space-y-7 mb-1">

        <Skill progress={ 45 }>
          C# / .NET
        </Skill>

        <Skill progress={ 20 }>
          .NET Core
        </Skill>

        <Skill progress={ 30 }>
          MS SQL
        </Skill>

        <Skill progress={ 35 }>
          C / C++
        </Skill>

        <Skill progress={ 30 }>
          Java
        </Skill>

        <Skill progress={ 20 }>
          React
        </Skill>

        <Skill progress={ 20 }>
          TypeScript
        </Skill>

      </div>

    </BorderBox>
  </>
)

export default Skills