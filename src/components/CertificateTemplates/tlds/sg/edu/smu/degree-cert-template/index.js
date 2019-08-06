import MultiCertificateRenderer from "template-utils/MultiCertificateRenderer";
import Certificate from "./certificate";
import approvedAddresses from "../common";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: Certificate
  }
];

const SMUCertificate = props => (
  <MultiCertificateRenderer
    templates={templates}
    whitelist={approvedAddresses}
    {...props}
  />
);

export default SMUCertificate;
