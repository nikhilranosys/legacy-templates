import MultiCertificateRenderer from "template-utils/MultiCertificateRenderer";
import Transcript from "./transcript";

const templates = [
  {
    id: "transcript",
    label: "Transcript",
    template: Transcript
  }
];

const SMUTranscript = props => (
  <MultiCertificateRenderer templates={templates} {...props} />
);

export default SMUTranscript;
