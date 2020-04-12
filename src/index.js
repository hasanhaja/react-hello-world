import React, { Component } from "react";
import { render } from "react-dom";

/**
 * You need to import React in any file using JSX
 */

const codeData = {
  total: 60,
  javascript: 20,
  cpp: 25,
  reason: 15,
  goal: 200,
};

const getPercent = (decimal) => {
  return decimal * 100 + "%";
};

const calcGoalProgress = (total, goal) => {
  return getPercent(total / goal);
};

//const CodeDaysCounter = (props) => {
const CodeDaysCounter = ({ total, javascript, reason, cpp, goal }) => {
  //const { total, javascript, reason, cpp, goal } = props;
  return (
    <section>
      <div>
        <p>Total Days: {total}</p>
      </div>
      <div>
        <p>JS Days: {javascript}</p>
      </div>
      <div>
        <p>C++ Days: {cpp}</p>
      </div>
      <div>
        <p>ReasonML Days: {reason}</p>
      </div>
      <div>
        <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
      </div>
    </section>
  );
};

// // React.Component
// class CodeDaysCounter extends Component {
//   getPercent = (decimal) => {
//     return decimal * 100 + "%";
//   };

//   calcGoalProgress = (total, goal) => {
//     return this.getPercent(total / goal);
//   };

//   render() {
//     // The order doesn't matter as long as the prop names are the same.
//     const { total, javascript, reason, cpp, goal } = this.props;
//     return (
//       <section>
//         <div>
//           <p>Total Days: {total}</p>
//         </div>
//         <div>
//           <p>JS Days: {javascript}</p>
//         </div>
//         <div>
//           <p>C++ Days: {cpp}</p>
//         </div>
//         <div>
//           <p>ReasonML Days: {reason}</p>
//         </div>
//         <div>
//           <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
//         </div>
//       </section>
//     );
//   }
// }

// ReactDOM.render()
render(
  <CodeDaysCounter
    total={codeData.total}
    javascript={codeData.javascript}
    cpp={codeData.cpp}
    reason={codeData.reason}
    goal={codeData.goal}
  />,
  document.getElementById("root")
);
