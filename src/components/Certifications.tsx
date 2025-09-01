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
        date="JULY 2025"
        link="https://learn.microsoft.com/api/credentials/share/en-us/jaqubm/1A5CF60B6A8C703F?sharingId"
        title="Microsoft Certified: Azure Fundamentals"
        company="Microsoft"
        subtitle={["Credential ID 1A5CF60B6A8C703F"]}
        isLink={ true } />

        <DetailInfo
        date="JULY 2025"
        link="https://learn.kodekloud.com/certificate/8eaa021a-55c8-4555-9d77-8ac74ae828a9"
        title="Udemy Labs - Online Kubernetes Lab for Beginners - Hands On"
        company="KodeKloud"
        subtitle={["Credential ID 8eaa021a-55c8-4555-9d77-8ac74ae828a9"]}
        isLink={ true } />

        <DetailInfo
        date="JUNE 2025"
        link="https://credentials.databricks.com/cadbece7-8eca-4792-b12e-b64c93f7e053"
        title="Academy Accreditation - Databricks Fundamentals"
        company="Databricks"
        subtitle={["Credential ID 149354987"]}
        isLink={ true } />

        <DetailInfo
        date="MAY 2025"
        link="https://www.udemy.com/certificate/UC-43940342-92d1-4a20-b842-bbf4936948ac/"
        title="C# .NET with MS SQL Complete Beginner to Master"
        company="Udemy"
        subtitle={["Credential ID UC-43940342-92d1-4a20-b842-bbf4936948ac"]}
        isLink={ true } />

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