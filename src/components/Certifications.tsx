import BorderBox from "./ui/BorderBox.tsx"
import Title from "./ui/Title.tsx"
import DetailInfo from "./ui/DetailInfo.tsx"

const Certifications = () => (
  <>
    <BorderBox>

      <Title>
        Certifications
      </Title>

      <div className="space-y-5">

        <DetailInfo
        date="MARCH 2024"
        link="https://www.udemy.com/certificate/UC-e65a92bf-b366-4613-b771-f8d0de19d20b/"
        title="Scala & Functional Programming Essentials"
        company="Rock the JVM"
        subtitle={["Credential ID UC-e65a92bf-b366-4613-b771-f8d0de19d20b"]}
        isLink={ true } />

        <DetailInfo 
        date="NOVEMBER 2023" 
        link="https://www.udemy.com/certificate/UC-668ea29d-a21b-4d79-8eb0-359ec8c98c5d/" 
        title="C# Advanced Topics: Prepare for Technical Interviews" 
        company="Code With Mosh" 
        subtitle={["Credential ID UC-668ea29d-a21b-4d79-8eb0-359ec8c98c5d"]} 
        isLink={ true } />

        <DetailInfo 
        date="NOVEMBER 2023" 
        link="https://www.udemy.com/certificate/UC-2599c05c-9262-4bd8-81d0-144337233766/" 
        title="C# Intermediate: Classes, Interfaces and OOP" 
        company="Code With Mosh" 
        subtitle={["Credential ID UC-2599c05c-9262-4bd8-81d0-144337233766"]} 
        isLink={ true } />
        
        <DetailInfo 
        date="OCTOBER 2023" 
        link="https://www.udemy.com/certificate/UC-b3125ad8-504e-435f-94ef-d802698bc212/" 
        title="C# Basics for Beginners: Learn C# Fundamentals by Coding" 
        company="Code With Mosh" 
        subtitle={["Credential ID UC-b3125ad8-504e-435f-94ef-d802698bc212"]} 
        isLink={ true } />

        <DetailInfo 
        date="JULY 2021" 
        title="First Certificate in English" 
        company="Cambridge University Press & Assessment English" 
        subtitle={["Credential ID B6319888"]} 
        isLink={ false } />

      </div>

    </BorderBox>
  </>
)

export default Certifications