"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const path = __importStar(require("path"));
const create_1 = require("./querys/create");
const get_1 = require("./querys/get");
const fs = require("fs");
const schemaString = fs.readFileSync(path.join(__dirname, './schema.gql'), 'utf-8');
const schema = (0, graphql_1.buildSchema)(schemaString);
const app = (0, express_1.default)();
const PORT = 3000;
const root = {
    getStudent: ({ id }, req) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const student = yield (0, get_1.getStudentById)(id);
            if (student && student.id) {
                return { name: student.name, id: student.id, class: student.class };
            }
            else {
                throw new Error("student not found");
            }
        }
        catch (e) {
            console.log(e);
        }
    }),
    getTeacher: ({ id }, req) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const teacher = yield (0, get_1.getTeacherById)(id);
            if (teacher && teacher.id) {
                return { name: teacher.name, id: teacher.id, email: teacher.email };
            }
            else {
                throw new Error("There is a error in getting the teacher");
            }
        }
        catch (e) {
            console.log(e);
        }
    }),
    // todo need to check how we can send all the data like all the users at  time
    // getAllStudents:async(req:any)=>{
    //     try{
    //         const students = await getAllStudents()
    //         if(students && students.length > 0)
    //         {
    //             return students
    //         }
    //         else
    //         {
    //             return []
    //         }
    //     }
    //     catch(e)
    //     {
    //         console.log(e)
    //     }
    // },
    createStudent: ({ input }, req) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(" i am inside the student function");
        try {
            const student = yield (0, create_1.createStudent)(input.name, input.class);
            if (student && student.id) {
                console.log("I am getting student");
                return { name: student.name, id: student.id, class: student.class };
            }
            else {
                console.log(" i am not getting the student");
                throw new Error("Failed to create student");
            }
        }
        catch (e) {
            console.log(e);
        }
    }),
    createTeacher: ({ input }, req) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const teacher = yield (0, create_1.createTeacher)(input.name, input.email);
            if (teacher) {
                return { id: teacher.id, email: teacher.email, name: teacher.name };
            }
            else {
                throw new Error("THere is an error in creating the user");
            }
        }
        catch (e) {
            console.log(e);
        }
    })
};
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(PORT, () => {
    console.log("app is lisenting at http://localhost:3000");
    console.log("graphql querys are listening at http://localhost:3000/graphql");
});
