type IndividualSkillProps = {
  skill: string;
}

const IndividualSkill = ({ skill } : IndividualSkillProps) => (
  <div className="flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent/80 text-xs font-medium">
    { skill }
  </div>
)

export default IndividualSkill