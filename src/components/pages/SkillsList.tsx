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

        <Skill progress={ 50 }>
          C# / .NET
        </Skill>

        <Skill progress={ 50 }>
          .NET Core
        </Skill>

        <Skill progress={ 50 }>
          C / C++
        </Skill>

        <Skill progress={ 50 }>
          Java
        </Skill>

        <Skill progress={ 50 }>
          OOP
        </Skill>

      </div>

    </BorderBox>
  </>
)

export default SkillsList