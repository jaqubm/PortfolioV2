import BorderBox from "../BorderBox"
import Title from "../Title"
import DetailInfo from "../DetailInfo"

const Certifications = () => (
  <>
    <BorderBox>

      <Title>
        Certifications
      </Title>

      <div className="space-y-5">

        <div>
          <a href="https://www.udemy.com/certificate/UC-668ea29d-a21b-4d79-8eb0-359ec8c98c5d/" target="_blank" >
            <DetailInfo date="NOVEMBER 2023" title="C# Advanced Topics: Prepare for Technical Interviews" company="Udemy" subtitle={["Credential ID UC-668ea29d-a21b-4d79-8eb0-359ec8c98c5d"]} link={ true } />
          </a>
        </div>

        <div>
          <a href="https://www.udemy.com/certificate/UC-2599c05c-9262-4bd8-81d0-144337233766/" target="_blank" >
            <DetailInfo date="NOVEMBER 2023" title="C# Intermediate: Classes, Interfaces and OOP" company="Udemy" subtitle={["Credential ID UC-2599c05c-9262-4bd8-81d0-144337233766"]} link={ true } />
          </a>
        </div>
        
        <div>
          <a href="https://www.udemy.com/certificate/UC-b3125ad8-504e-435f-94ef-d802698bc212/" target="_blank" >
            <DetailInfo date="OCTOBER 2023" title="C# Basics for Beginners: Learn C# Fundamentals by Coding" company="Udemy" subtitle={["Credential ID UC-b3125ad8-504e-435f-94ef-d802698bc212"]} link={ true } />
          </a>
        </div>

        <div>
          <DetailInfo date="JULY 2021" title="First Certificate in English" company="Cambridge University Press & Assessment English" subtitle={["Credential ID B6319888"]} link={ false } />
        </div>

      </div>

    </BorderBox>
  </>
)

export default Certifications