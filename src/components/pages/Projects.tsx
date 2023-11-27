import BorderBox from "../BorderBox"
import Title from "../Title"
import ProjectInfo from "../ProjectInfo"

import gravitySimulator from "../../assets/gravitySimulator.png"

const Projects = () => (
  <>
    <BorderBox>

      <Title>
        Projects
      </Title>

      <div className="space-y-5 mb-4">

        <div>
          <a href="https://github.com/jaqubm/gravitySimulator" target="_blank">
            <ProjectInfo image={ gravitySimulator } title="gravitySimulator">
              Gravity Simulator for Particles and GravitySources with collision system made using SFML library in C++. It provides 5 scenes - testing accuracy of collision implementation, test scene with totally random particles movement and three custom scenes.
            </ProjectInfo>
          </a>
        </div>

      </div>

    </BorderBox>
  </>
)

export default Projects