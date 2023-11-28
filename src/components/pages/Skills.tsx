import BorderBox from "../BorderBox"
import Title from "../Title"
import SkillInfo from "../SkillInfo"

const SkillInfos = () => (
  <>
    <BorderBox>

      <Title>
        Skills
      </Title>

      <div className="space-y-7 mb-1">

        <SkillInfo progress={ 45 }>
          C# / .NET
        </SkillInfo>

        <SkillInfo progress={ 35 }>
          .NET Core
        </SkillInfo>

        <SkillInfo progress={ 30 }>
          MS SQL
        </SkillInfo>

        <SkillInfo progress={ 30 }>
          C / C++
        </SkillInfo>

        <SkillInfo progress={ 25 }>
          Java
        </SkillInfo>

        <SkillInfo progress={ 25 }>
          React
        </SkillInfo>

        <SkillInfo progress={ 25 }>
          TypeScript
        </SkillInfo>

      </div>

    </BorderBox>
  </>
)

export default SkillInfos