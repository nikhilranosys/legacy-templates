import dynamic from "template-utils/dynamic";
import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

const SMUCERT = dynamic(() =>
  import("./degree-cert-template" /* webpackChunkName: "smu-Templates" */)
);
const SMUTRANSC = dynamic(() =>
  import("./transcript-template" /* webpackChunkName: "smu-Templates" */)
);

const templates = {
  "degree-cert-template": SMUCERT,
  "transcript-template": SMUTRANSC
};

export default addDirToTemplatePath("smu", templates);
