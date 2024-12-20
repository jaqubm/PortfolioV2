import BorderBox from "./ui/BorderBox.tsx"
import Title from "./ui/Title.tsx"
import SkillInfo from "./ui/SkillInfo.tsx"

const SkillInfos = () => (
  <>
    <BorderBox>

      <Title>
        Skills
      </Title>

      <div className="space-y-7 mb-1">

        <SkillInfo 
        skill="C# / .NET Core"
        progress={ 45 } />

        <SkillInfo 
        skill="ASP.NET Core"
        progress={ 40 } />

        <SkillInfo
        skill="Azure"
        progress={ 30 } />

        <SkillInfo
        skill="Scala"
        progress={ 30 } />

        <SkillInfo
        skill="Python"
        progress={ 30 } />

        <SkillInfo 
        skill="SQL"
        progress={ 30 } />

        <SkillInfo 
        skill="C / C++" 
        progress={ 30 } />

        <SkillInfo 
        skill="Java" 
        progress={ 25 } />

        <SkillInfo
        skill="React"
        progress={ 25 } />

        <SkillInfo
        skill="TypeScript"
        progress={ 25 } />

        <SkillInfo
        skill="Databricks"
        progress={ 25 } />

        <SkillInfo
        skill="Airflow"
        progress={ 20 } />

      </div>

    </BorderBox>
  </>
)

export default SkillInfos