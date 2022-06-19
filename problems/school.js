/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    notes: {},

    info: function() {
      return `${this.name} is a ${this.year} year student`;
    },

    listCourses: function() {
      return this.courses;
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    addNote: function(code, note) {
      let index = this.courses.findIndex(element => element['code'] === code);
      let name = this.courses[index]['name'];
      if (this.notes[name]) {
        this.notes[name].push(note);
      } else {
        this.notes[name] = [note];
      }
    },

    viewNotes: function() {
      for (const course in this.notes) {
        let comments = this.notes[course].join("; ");
        console.log(`${course}: ${comments}`);
      }
    },

    updateNote: function(code, note) {
      let index = this.courses.findIndex(element => element['code'] === code);
      let name = this.courses[index]['name'];
      this.notes[name] = [note];
    }
  };
}

let school = {
  students: [],

  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode});
  },

  addGrade(student, courseCode, grade) {
    let index = student.listCourses().findIndex(course => course.code === courseCode);
    if (index !== -1) {
      student.courses[index].grade = grade;
    }
  },

  getReportCard(student) {
    student.listCourses().forEach(course => {
      if (course.grade !== undefined) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In progress`);
      }
    });
  },

  courseReport(courseName) {
    let grades = [];
    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === courseName) {
          grades.push([student.name, course.grade]);
        }
      });
    });

    //Calculate average score or error message
    let avg = grades.map(grade => grade[1])
      .reduce((a, b) => a + b, 0) / grades.length;

    if (Number.isNaN(avg)) {
      avg = 'Insufficient data to calculate average score.';
    }

    //Console output
    console.log(`=${courseName} Grades=`);
    grades.forEach(grade => console.log(`${grade[0]}: ${grade[1]}`));
    console.log('---');
    console.log(`Course Average: ${avg}`);

  }
};

//Create students
const foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);

const bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, 'Math', 101);
school.addGrade(bar, 101, 91);

const qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);


//TEST CASES
// school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

school.courseReport('Advanced Math');
// // = =Advanced Math Grades=
// // = foo: 90
// // = qux: 90
// // = ---
// // = Course Average: 90

school.courseReport('Physics');
// // = undefined