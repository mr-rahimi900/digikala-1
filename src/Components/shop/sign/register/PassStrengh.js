import React from "react";
import { Container, ProgressBar } from "react-bootstrap";
import { redirect } from "react-router-dom";
import zxcvbn from "zxcvbn";

const PassStrengh = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const changePassColor = () => ({
    width: `${num}%`,
    background: progressColor(),
    height: "7px",
  });

  const creatPassLable = () => {
    switch (testResult.score) {
      case 0:
        return "خیلی ضعیف";

      case 1:
        return "ضعیف";

      case 2:
        return "متوسط";

      case 3:
        return "خوب";

      case 4:
        return "قوی";

      default:
        return "حسن";
    }
  };
  const progressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#828282";

      case 1:
        return "#ea1111";

      case 2:
        return "#ffad00";

      case 3:
        return "#9bc158";

      case 4:
        return "#00b500";

      default:
        return "none";
    }
  };
  // const changePasswordColor = () => ({
  //   width: `${num}%`,
  //   background: progressColor(),
  //   height: `7px`,
  // });
  return (
    <Container>
      {/* <div className="mt-3" style={{ height: "7px", background: "white" }}>
        <ProgressBar style={changePassColor()} />
        <p className="mt-2" style={{color: progressColor()}}>
          {creatPassLable()}
        </p>
      </div> */}
      <div className="progress my-2" style={{ height: "7px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={changePassColor()}
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p style={{ color: progressColor(), fontSize: "0.8rem" }}>
        {creatPassLable()}
      </p>
    </Container>
  );
};

export default PassStrengh;
