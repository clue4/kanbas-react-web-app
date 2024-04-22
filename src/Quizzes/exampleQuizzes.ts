import { Question, Quiz, defaultQuizOptions } from "./types"
// for testing while we don't have a backend
export const quizArray: Quiz[] = [
  {
    ...defaultQuizOptions,
    points: 0,
    questions: [],
    name: 'Example Quiz 1 Available',
    showCorrectAnswers: false,
    course: '6612ef8b8940ac534a801439',
    dueDate: new Date("April 21, 2024 11:59:00"),
    availableDate: new Date("April 13, 2024 11:59:00"),
    untilDate: new Date("April 24, 2024 11:59:00"),
    _id: "1"
  },  
  {
    ...defaultQuizOptions,
    points: 0,
    questions: [],
    name: 'Example Quiz 2 Closed',
    showCorrectAnswers: false,
    course: '6612ef8b8940ac534a801439',
    dueDate: new Date("April 21, 2023 11:59:00"),
    availableDate: new Date("April 13, 2023 11:59:00"),
    untilDate: new Date("April 24, 2023 11:59:00"),
    published: true,
    _id: "2"
  },
  {
    ...defaultQuizOptions,
    points: 0,
    questions: [],
    name: 'Example Quiz 3 Not Available Until',
    showCorrectAnswers: false,
    course: '6612ef8b8940ac534a801439',
    dueDate: new Date("April 21, 2025 11:59:00"),
    availableDate: new Date("April 13, 2025 11:59:00"),
    untilDate: new Date("April 24, 2025 11:59:00"),
    _id: "3"
  }
];

export const questionArray: Question[] = [
  {
    title: "Q1",
    type: "MultipleChoice",
    points: 4,
    question: "What is the capital of France?",
    correctAnswer: "Paris",
    possibleAnswers: ["London", "Paris", "Berlin", "Rome"]
  },
  {
    title: "Q2",
    type: "TrueFalse",
    points: 4,
    question: "The Earth is flat.",
    correctAnswer: false,
  },
  {
    title: "Q3",
    type: "FillInBlank",
    points: 4,
    question: "What is the capital of The United States?",
    correctAnswers: ["DC", "Washington DC", "Washington D.C."],
  }
]