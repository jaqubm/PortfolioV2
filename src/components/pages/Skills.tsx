import BorderBox from "../BorderBox"
import Title from "../Title"
import SkillInfo from "../SkillInfo"

const SkillInfos = () => (
  <>
    <BorderBox>

      <Title>
        SkillInfos
      </Title>

      <div className="space-y-7 mb-1">

        <SkillInfo progress={ 45 }>
          C# / .NET
        </SkillInfo>

        <SkillInfo progress={ 20 }>
          .NET Core
        </SkillInfo>

        <SkillInfo progress={ 30 }>
          MS SQL
        </SkillInfo>

        <SkillInfo progress={ 35 }>
          C / C++
        </SkillInfo>

        <SkillInfo progress={ 30 }>
          Java
        </SkillInfo>

        <SkillInfo progress={ 20 }>
          React
        </SkillInfo>

        <SkillInfo progress={ 20 }>
          TypeScript
        </SkillInfo>

      </div>

    </BorderBox>
  </>
)

export default SkillInfos