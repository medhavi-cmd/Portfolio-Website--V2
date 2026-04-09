import { ArrowBigRight, Download } from "lucide-react";
import Badge from "../UI/Badge";
import Button from '../UI/Button'

const LeftSection = () => {
  return (
    <div>
      <Badge text = "Hello, I'm Medhavi" showDot = {true} />
      <Button text="Download Resume" icon={<Download size={16} />} variant="primary" onClick={() => window.open("/resume.pdf", "_blank")} />
    <Button text="View Projects" icon={<ArrowBigRight size={16} />} variant="outline" onClick={() => window.open("/projects", "_blank")} />
    </div>
  )
}

export default LeftSection
