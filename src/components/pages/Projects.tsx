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

        <ProjectInfo 
        image={ gravitySimulator } 
        link="https://github.com/jaqubm/gravitySimulator" 
        title="gravitySimulator" 
        skills={ ["C++", "SFML"] }>
          Gravity Simulator for Particles and Gravity Sources with collision system made using SFML library in C++. It provides 5 scenes - testing accuracy of collision implementation, test scene with totally random particles movement and three custom scenes.
        </ProjectInfo>

        <ProjectInfo 
        image={ portfolio_v1 } 
        link="https://github.com/jaqubm/PortfolioV1" 
        title="Portfolio v1"
        skills={ ["HTML", "CSS", "JavaScript"] }>
          My first portfolio website built from scratch.
        </ProjectInfo>

        <ProjectInfo 
        image={ easy_Malloc } 
        link="https://github.com/jaqubm/easy_Malloc" 
        title="Easy Malloc"
        skills={ ["C"] }>
          Program in C that imitates malloc() and free() in a simplified way along with tests of those functions.
        </ProjectInfo>

        <ProjectInfo 
        image={ nCurses_game } 
        link="https://github.com/jaqubm/nCurses_game" 
        title="nCurses game"
        skills={ ["C", "nCurses", "Threads", "UNIX Sockets"] }>
          2D console game for maximum of 2 players. Every player spawns in random place on map. The only goal is to get as many coins as possible and bring them back to the camp, where they can be stored. There are also 2 beasts which moves randomly. They will follow the player as soon as they will be in theirs field of view.
        </ProjectInfo>

      </div>

    </BorderBox>
  </>
)

export default Projects