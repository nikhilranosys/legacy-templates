import MultiCertificateRenderer from "template-utils/MultiCertificateRenderer";
import Certificate from "./certificate";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: Certificate
  }
];

const SMUCertificate = props => (
  <MultiCertificateRenderer templates={templates}
  {...props} />
);

export default SMUCertificate;
