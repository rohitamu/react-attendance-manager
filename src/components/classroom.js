import React, { Component } from "react";
import { studentInfo } from "./data";

export class Classroom extends Component {
  //studentInfo is the list of student details in data.js
  state = {
    student: studentInfo,
    absentList: [],
  };
  handleClick = (id) => {
    //handleClick is best place to change the status property of student based on id
 
  };
  handleAttendance = () => {
    //set the list of absentees to the absentList state. filter student state based on the status property.
    
  };
  render() {
    //display the cards by mapping into the student
    const student = this.state.student.map((stu) => {
      return (
        <div
          style={{ padding: 5 }}
          className={stu.status}
          id="students"
        >
          
        </div>
      );
    });
    //display the students' id by mapping into absentList
    const absentees = this.state.absentList.map((stu) => {
      return <div className="absentees">{}</div>;
    });
    return (
      <div>
        <div className="content">
          <h1 className="title" style={{ textAlign: "center", color: "blue" }}>
          </h1>

          <div className="main">{}</div>
          <div className="vertical"></div>

          <button className="list1">
          </button>
        </div>
        <h3 className="text"></h3>

        <div className="list">
          <h2 className="absenteesList">{}</h2>
        </div>
      </div>
    );
  }
}

export default Classroom;
