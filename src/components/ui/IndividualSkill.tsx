type IndividualSkillProps = {
  skill: string;
}

const IndividualSkill = ({ skill } : IndividualSkillProps) => (
  <div className="h-fit flex items-center px-3 py-1 mr-1.5 mt-2 rounded-full bg-accent/10 text-accent/80 text-xs font-medium transition-transform hover:scale-110 cursor-pointer">
    { skill }
  </div>
)

export default IndividualSkill