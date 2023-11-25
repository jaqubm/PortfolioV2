import BorderBox from "../BorderBox"
import Title from "../Title"
import DetailInfo from "../DetailInfo"

const WorkExperience = () => (
  <>
    <BorderBox>

      <Title>
        Work Experience
      </Title>

      <div className="space-y-5">

        <DetailInfo date="09 2023 - 11 2023" title="Job Title" company="Company">
          Description of what I do in this job. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </DetailInfo>

        <DetailInfo date="03 2023 - 08 2023" title="Another Job Title" company="Company" subtitle={["Previous Title"]}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
        </DetailInfo>

      </div>

    </BorderBox>
  </>
)

export default WorkExperience