import { Selector } from "testcafe";

fixture("Singapore Management University").page`http://localhost:3000`;

const Certificate = "./transcript.opencert";

const TemplateTabList = Selector("#template-tabs-list");
const RenderedCertificate = Selector("#rendered-certificate");

const validateTextContent = async (t, component, texts) =>
  texts.reduce(
    async (prev, curr) => t.expect(component.textContent).contains(curr),
    Promise.resolve()
  );

test("Transcript is rendered correctly", async t => {
  // Uploads certificate via dropzone
  await t.setFilesToUpload("input[type=file]", [Certificate]);

  // Transcript tabs rendered
  await t.expect(TemplateTabList.textContent).contains("Transcript");

  // Certificate tab content
  await validateTextContent(t, RenderedCertificate, [
    "Name: TEST STUDENT NAME",
    "Date of Enrolment: 15 Aug 2011",
    "Date of Birth: 10 Oct 1990",
    "Student ID No: 0123456789",
    "Date of Issue: 24 JUL 2019",
    "Serial Number: 123456789"
  ]);
});
