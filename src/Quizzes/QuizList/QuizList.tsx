import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlane, FaPlusCircle, FaRegTimesCircle, FaPlus } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { quizArray } from "../exampleQuizzes";
import { Quiz } from "../types";
import { createAvailabilityText } from "../utils";
import './index.css';

export const QuizList = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // TODO: Change this to use backend
  const quizzesList: Quiz[] = quizArray.filter((quiz) => quiz.course === courseId);

  return (
    <div className='assignments-container'>
      <div className="top-content">
        <input type="search" placeholder="Search for Quiz"/>
        <div className="button-group">
          {/* Todo: add quiz button functionality */}
          <button 
            className="btn btn-danger"
            onClick={() => navigate(`/Kanbas/Courses/${courseId}/Quizzes/create`)}
          >
            <FaPlus /> 
            Quiz
          </button>
          <button className="btn btn-light mx-2"><FaEllipsisV /></button> 
        </div>
      </div>
      <div className="assignments-wrapper">
        <hr />
        <ul className="list-group wd-modules">
          <li className="list-group-item list-header">
            <div>
              <FaEllipsisV className="me-2" /> 
              Assignment Quizzes
              <span className="float-end">
                <span className='percent-value'>40% of Total</span>
                <FaCheckCircle className="text-success" />
              </span>
            </div>
            <ul className="list-group">
              {quizzesList.map((quiz, index) => (
                <li key={index} className="list-group-item">
                  <div style={{ display: 'flex', alignItems: 'center',}}>
                    <div className='assignment-item'>
                      <FaPlane className="me-2" />
                      <div>
                        <Link
                          to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`}
                        >
                          {quiz.name}
                        </Link>
                        <div>
                          <span>{`${createAvailabilityText(quiz)}`}</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {/* Todo: published icon functionality */}
                      {quiz.published ? <FaRegTimesCircle /> : <FaCheckCircle className="text-success" />}
                      {/* Todo: ellipse button functionality */}
                      <FaEllipsisV />
                    </div>
                  </div>
                </li>))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}