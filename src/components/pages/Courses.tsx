import BorderBox from "../BorderBox"
import Title from "../Title"
import DetailInfo from "../DetailInfo"

const Courses = () => (
  <>
    <BorderBox>

      <Title>
        Courses
      </Title>

      <div className="space-y-5">

        <DetailInfo date="JANUARY 2023" title="Course Name" company="Udemy" subtitle={["Credential ID:"]}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using..
        </DetailInfo>

        <DetailInfo date="JANUARY 2023" title="Course Name" company="Udemy" subtitle={["Credential ID:"]}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using..
        </DetailInfo>

      </div>

    </BorderBox>
  </>
)

export default Courses