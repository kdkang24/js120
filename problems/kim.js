const foo = {
  name: "foo",
  year: "3rd",
  courses: [
      { name: "Math", code: 101, grade: 95 },
      { name: "Advanced Math", code: 102, grade: 90 },
      { name: "Physics", code: 202 },
  ],
};

const bar = {
  name: "bar",
  year: "1st",
  courses: [{ name: "Math", code: 101, grade: 91 }],
};

const qux = {
  name: "qux",
  year: "2nd",
  courses: [
      { name: "Math", code: 101, grade: 93 },
      { name: "Advanced Math", code: 102, grade: 90 },
  ],
};

function createStudent(name, year) {
  return {
      name,
      year,
      courses: [],
      courseMap: {},
      grades: {},
      note: {},
      info: function () {
          return `${this.name} is a ${this.year} year student`;
      },
      listCourses: function () {
          return this.courses;
      },
      addCourse(course) {
          this.courses.push(course);
          this.courseMap[course.code] = course.name;
      },
      addNote(code, note) {
          if (this.note[code]) {
              this.note[code] += `; ${note}`;
          } else {
              this.note[code] = "";
              this.note[code] += `${this.courseMap[code]}: ${note}`;
          }
      },
      viewNotes() {
          Object.keys(this.note).forEach((n) => console.log(this.note[n]));
      },
      updateNote(code, updatedNote) {
          this.note[code] = updatedNote;
      },
  };
}

const school = {
  students: [],
  addStudent: function (student) {
      const validYears = ["1st", "2nd", "3rd", "4th", "5th"];
      if (!validYears.includes(student.year)) {
          console.log("Invalid Year");
      } else {
          this.students.push(createStudent(student.name, student.year));
      }
  },
  findStudent: function (studentName) {
      const studentFound = this.students.filter(
          (student) => student.name === studentName
      );
      return studentFound[0];
  },
  enrollStudent: function (studentName, course, code) {
      this.findStudent(studentName).addCourse({ name: course, code: code });
  },
  addGrade: function (studentName, course, grade) {
      this.findStudent(studentName).grades[course] = grade;
  },
  getReportCard(studentName) {
      const grades = this.findStudent(studentName).grades;
      Object.keys(grades).forEach((subject) =>
          console.log(`${subject}: ${grades[subject]}`)
      );
  },
  courseReport(course) {
      console.log(`==${course} Grades ==`);
      let totalGrades = 0;
      for (let i = 0; i < this.students.length; i++) {
          const student = this.students[i];
          if (student.grades[course]) {
              console.log(`${student.name}: ${student.grades[course]}`);
              totalGrades += student.grades[course];
          }
          if (i === this.students.length - 1 && totalGrades === 0) {
              return undefined;
          }
      }
      console.log("---");
      console.log(`Course Average: ${totalGrades / this.students.length}`);
  },
};