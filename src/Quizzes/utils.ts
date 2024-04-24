import { FillInBlank, MultipleChoice, Question, Quiz, TrueFalse } from "./types";

export const translateBooleanToStringValue = (bool: boolean | undefined) => bool ? "Yes" : "No";

export const createAvailabilityText = (quiz: Quiz) => {
  const currentDate = new Date();
  const { untilDate, availableDate, dueDate, points } = quiz;
  let availabilityString;

  if (currentDate > untilDate) {
    availabilityString = "Closed";
  } else if (currentDate < availableDate) {
    availabilityString = `Not available until ${availableDate.toLocaleString('default', { month: 'long', day: '2-digit', year: 'numeric'})}`;
  } else {
    availabilityString = "Available";
  }

  const dueString = ` | Due ${dueDate.toLocaleString('default', { month: 'long', day: '2-digit', year: 'numeric'})} | ${points} pts | ${quiz.numQuestions} Questions`;

  return availabilityString + dueString;
}


export const getQuestionType = (question: Question) => {
  if ((question as TrueFalse).correctAnswer !== undefined && (question as MultipleChoice).possibleAnswers === undefined) {
    return 'true-false';
  } else if ((question as MultipleChoice).possibleAnswers !== undefined) {
    return 'multiple-choice';
  } else {
    return 'fill-blanks';
  }
}

export const defaultMCAnswers = (question: Question) => {
  if ((question as MultipleChoice).possibleAnswers === undefined) {
    return ["Example 1", "Example 2", "Example 3", "Example 4"];
  } else {
    return (question as MultipleChoice).possibleAnswers;
  }
}

export const getFIBChoices = (question: Question) => {
  if ((question as FillInBlank).correctAnswers === undefined) {
    return ["Example 1", "Example 2", "Example 3", "Example 4"];
  } else {
    return (question as FillInBlank).correctAnswers;
  }
}

export const questionsToJson = (questions: Question[]) => {
  const jsonQuestions = [];

  for (const question of questions) {
    if (question.type === 'MultipleChoice') {
      const mcQuestion = question as MultipleChoice;
      let jsonQuestion = {
        title: question.title,
        type: question.type,
        quiz: question.quiz,
        points: question.points,
        question: question.question,
        correctAnswer: mcQuestion.correctAnswer,
        possibleAnswers: mcQuestion.possibleAnswers
      };
  
      jsonQuestions.push(jsonQuestion);

    } else if (question.type === 'TrueFalse') {
      const tfQuestion = question as TrueFalse;
      let jsonQuestion = {
        title: question.title,
        type: question.type,
        quiz: question.quiz,
        points: question.points,
        question: question.question,
        correctAnswer: tfQuestion.correctAnswer,
      };

      jsonQuestions.push(jsonQuestion);

    } else if (question.type === 'FillInBlank') {
      const fibQuestion = question as FillInBlank;
      let jsonQuestion = {
        title: question.title,
        type: question.type,
        quiz: question.quiz,
        points: question.points,
        question: question.question,
        correctAnswers: fibQuestion.correctAnswers,
      };    

      jsonQuestions.push(jsonQuestion);

    }
  }

  return jsonQuestions;
};