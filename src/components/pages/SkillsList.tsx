import BorderBox from "../BorderBox"
import Title from "../Title"
import Skill from "../Skill"

const SkillsList = () => (
  <>
    <BorderBox>

      <Title>
        Skills
      </Title>

      <div className="space-y-7">

        <Skill progress={ 60 }>
          C# / .NET
        </Skill>

        <Skill progress={ 50 }>
          .NET Core
        </Skill>

        <Skill progress={ 40 }>
          C / C++
        </Skill>

        <Skill progress={ 30 }>
          Java
        </Skill>

        <Skill progress={ 65 }>
          OOP
        </Skill>

      </div>

    </BorderBox>
  </>
)

export default SkillsList