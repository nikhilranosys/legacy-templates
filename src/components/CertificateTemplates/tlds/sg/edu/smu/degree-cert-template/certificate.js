import PropTypes from "prop-types";
import { get } from "lodash";

const Template = ({ certificate }) => {
  // Declaring what variables will be available to the template from the certificate
  const certificateName = get(certificate, "name");
  const honors = get(certificate, "additionalData.honors", "\u00a0");
  const recipientName = get(certificate, "recipient.name");
  const awardDate = get(certificate, "additionalData.awardDate");
  const bkgrdImg = get(certificate, "additionalData.bkGrd");
  const layout = get(certificate, "additionalData.layout");
  const displayName1 = get(certificate, "additionalData.displayName1");
  const displayName2 = get(certificate, "additionalData.displayName2");
  const nameFontSize = get(certificate, "additionalData.nameFontSize");
  const degreeFontSize = get(certificate, "additionalData.degreeFontSize");
  const SerialNumber = get(certificate, "additionalData.Serial Number");

  if (layout === "1" || layout === "3")
    return (
      <div className="container-fluid">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@media print { * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; } }"
          }}
        />
        <div className="row justify-content-md-center">
          <div
            style={{
              border: "1px solig black",
              height: `${layout === "1" ? "833px" : "909px"}`,
              width: `${layout === "1" ? "1097px" : "1199px"}`,
              backgroundImage: `url('${bkgrdImg}')`,
              backgroundPosition: "center center",
              position: "relative"
            }}
          >
            <div
              className="col-md-12 text-center"
              style={{ fontFamily: "sarif" }}
            >
              <div
                className="row"
                style={{
                  fontSize: `${nameFontSize}px`,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  marginTop: `${layout === "1" ? "225px" : "290px"}`
                }}
              >
                <div className="col-md-12">{recipientName}</div>
              </div>
              <div
                className="row"
                style={{
                  fontSize: `${degreeFontSize}px`,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  marginTop: `${layout === "1" ? "60px" : "65px"}`,
                  color: "#9c9062"
                }}
              >
                <div className="col-md-12">{certificateName}</div>
              </div>
              <div
                className="row"
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#9c9062",
                  marginTop: `${layout === "1" ? "10px" : "0px"}`
                }}
              >
                <div className="col-md-12">{honors}</div>
              </div>
              <div
                className="row"
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginTop: `${layout === "1" ? "110px" : "90px"}`
                }}
              >
                <div className="col-md-12">{awardDate}</div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                padding: "0 25px 5px",
                right: "0",
                bottom: "0",
                fontSize: "8px"
              }}
            >
              {SerialNumber}
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="container-fluid">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@media print { * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; } }"
        }}
      />
      <div className="row justify-content-md-center">
        <div
          style={{
            border: "1px solig black",
            height: "909px",
            width: "1199px",
            backgroundImage: `url('${bkgrdImg}')`,
            backgroundPosition: "center center",
            position: "relative"
          }}
        >
          <div
            className="col-md-12 text-center"
            style={{ fontFamily: "sarif" }}
          >
            <div
              className="row"
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginTop: "295px"
              }}
            >
              <div className="col-md-12">{recipientName}</div>
            </div>
            <div
              className="row"
              style={{
                fontSize: "38px",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginTop: "80px",
                color: "#9c9062"
              }}
            >
              <div className="col-md-12">{displayName1}</div>
            </div>
            <div
              className="row"
              style={{
                fontSize: "38px",
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "#9c9062",
                marginTop: "0px"
              }}
            >
              <div className="col-md-12">{displayName2}</div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              padding: "0 25px 5px",
              right: "0",
              bottom: "0",
              fontSize: "8px"
            }}
          >
            {SerialNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

Template.propTypes = {
  certificate: PropTypes.object.isRequired
};
export default Template;
