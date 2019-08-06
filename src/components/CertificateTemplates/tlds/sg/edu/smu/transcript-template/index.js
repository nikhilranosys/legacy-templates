import MultiCertificateRenderer from "template-utils/MultiCertificateRenderer";
import Transcript from "./transcript";
import approvedAddresses from "../common";

const templates = [
  {
    id: "transcript",
    label: "Transcript",
    template: Transcript
  }
];

const SMUTranscript = props => (
  <MultiCertificateRenderer
    templates={templates}
    whitelist={approvedAddresses}
    {...props}
  />
);

export default SMUTranscript;
