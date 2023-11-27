import BorderBox from "../BorderBox"
import Title from "../Title"
import ProjectInfo from "../ProjectInfo"

import gravitySimulator from "../../assets/gravitySimulator.webp"
import portfolio_v1 from "../../assets/portfolio_v1.webp"
import easy_Malloc from "../../assets/easyMalloc.webp"
import nCurses_game from "../../assets/nCurses_game.webp"

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

        <div>
          <a href="https://github.com/jaqubm/portfolio_v1" target="_blank">
            <ProjectInfo image={ portfolio_v1 } title="Portfolio v1">
              My first portfolio website built from scratch.
            </ProjectInfo>
          </a>
        </div>

        <div>
          <a href="https://github.com/jaqubm/easy_Malloc" target="_blank">
            <ProjectInfo image={ easy_Malloc } title="Easy Malloc">
              Program in C that imitates malloc() and free() in a simplified way along with tests of those functions.
            </ProjectInfo>
          </a>
        </div>

        <div>
          <a href="https://github.com/jaqubm/nCurses_game" target="_blank">
            <ProjectInfo image={ nCurses_game } title="nCurses game">
              2D console game for maximum of 2 players. Every player spawns in random place on map. The only goal is to get as many coins as possible and bring them back to the camp, where they can be stored. There are also 2 beasts which moves randomly. They will follow the player as soon as they will be in theirs field of view.
            </ProjectInfo>
          </a>
        </div>

      </div>

    </BorderBox>
  </>
)

export default Projects