import { IQuestion } from "./Iquestion";

export class ExamData {

    public questions: IQuestion[] = [
        {
            no: "1",
            isAnswer: true,
            answer: "A",
            isFlag: false,
            question: "adsa",
            questionImg: "",
            answerA: "a",
            answerB: "b",
            answerC: "c",
            answerD: "d"
            
        },
        {
            no: "2",
            isAnswer: true,
            answer: "A",
            isFlag: false,
            question: "adsa",
            questionImg: "",
            answerA: "a",
            answerB: "b",
            answerC: "c",
            answerD: "d"
        },
        {
            no: "3",
            isAnswer: false,
            answer: "",
            isFlag: false,
            question: "adsa",
            questionImg: "",
            answerA: "a",
            answerB: "b",
            answerC: "c",
            answerD: "d"
        },
        {
            no: "4",
            isAnswer: true,
            answer: "A",
            isFlag: true,
            question: "adsa",
            questionImg: "",
            answerA: "a",
            answerB: "b",
            answerC: "c",
            answerD: "d"
        },
        {
            no: "5",
            isAnswer: false,
            answer: "",
            isFlag: false,
            question: "adsa",
            questionImg: "",
            answerA: "a",
            answerB: "b",
            answerC: "c",
            answerD: "d"
        },
        {
            no: "6",
            isAnswer: true,
            answer: "A",
            isFlag: true,
            question: "adsa",
            questionImg: "",
            answerA: "a",
            answerB: "b",
            answerC: "c",
            answerD: "d"
        },
        {
            no: "7",
            isAnswer: true,
            answer: "A",
            isFlag: false,
            question: "adsa",
            questionImg: "",
            answerA: "a",
            answerB: "b",
            answerC: "c",
            answerD: "d"
        },
        {
            no: "8",
            isAnswer: true,
            answer: "A",
            isFlag: false,
            question: "adsa",
            questionImg: "",
            answerA: "a",
            answerB: "b",
            answerC: "c",
            answerD: "d"
        },
        {
            no: "9",
            isAnswer: true,
            answer: "A",
            isFlag: false,
            question: "adsa",
            questionImg: "",
            answerA: "a",
            answerB: "b",
            answerC: "c",
            answerD: "d"
        },
        {
            no: "10",
            isAnswer: true,
            answer: "A",
            isFlag: false,
            question: "adsa",
            questionImg: "",
            answerA: "a",
            answerB: "b",
            answerC: "c",
            answerD: "d"
        },
    ];

    randomAnswer(){
        const answers = "ABCD";

        return answers.charAt(Math.floor(Math.random() * answers.length));
    }
}
