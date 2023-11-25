import BorderBox from "../BorderBox"
import Title from "../Title"
import ProjectInfo from "../ProjectInfo"

import Test from "../../assets/test.jpg"

const Projects = () => (
  <>
    <BorderBox>

      <Title>
        Projects
      </Title>

      <div className="space-y-5">

        <ProjectInfo image={ Test } title="Project No 1">
          Description of project. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </ProjectInfo>

      </div>

    </BorderBox>
  </>
)

export default Projects