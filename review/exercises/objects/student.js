/* eslint-disable max-lines-per-function */
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info: function() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses: function() {
      return this.courses;
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    addNote: function(courseCode, note) {
      this.courses.forEach(course => {
        if (course['code'] === courseCode) {
          if (course['note']) {
            course['note'].push(note);
          } else {
            course['note'] = [];
            course['note'].push(note);
          }
        }
      });
    },

    updateNote: function(courseCode, note) {
      this.courses.forEach(course => {
        if (course['code'] === courseCode) {
          course['note'] = [];
          course['note'].push(note);
        }
      });
    },

    viewNotes: function() {
      this.courses.forEach(course => {
        if (course['note']) {
          let notes = course['note'].join('; ');
          console.log(`${course.name}: ${notes}`);
        }
      });
    }
  };
}

// let foo = createStudent('Foo', '1st');
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"

// School

let school = {
  students: [],
  courses: {},

  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent(student, course) {
    student.addCourse(course);
    if (this.courses[course.name] === undefined) {
      this.courses[course.name] = [];
    }

    this.courses[course.name].push(student);

  },

  addGrade(student, courseCode, grade) {
    let index = student.courses.findIndex(course => {
      return course['code'] === courseCode;
    });
    student.courses[index]['grade'] = grade;
  },

  getReportCard(student) {
    student.courses.forEach(course => {
      let grade;
      if (course.grade) {
        grade = course.grade;
      } else {
        grade = 'In progress';
      }

      console.log(`${course.name}: ${grade}`);
    });
  },

  courseReport(courseName) {
    let enrolledStudents = this.courses[courseName];
    let total = 0;

    console.log(`=${courseName} Grades=`);
    enrolledStudents.forEach(student => {
      let grade = student.courses.filter(course =>
        course.name === courseName)[0].grade;
      if (grade !== undefined) {
        total += grade;
        console.log(`${student.name}: ${grade}`);
      }

    });

    console.log('---');
    console.log(`Course Average: ${total / enrolledStudents.length}`);
  },
};

let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, { name: 'Math', code: 101 });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102 });
school.enrollStudent(foo, { name: 'Physics', code: 202, });
school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, { name: 'Math', code: 101 });
school.addGrade(bar, 101, 91);

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux,{ name: 'Math', code: 101 });
school.enrollStudent(qux,{ name: 'Advanced Math', code: 102 });
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);


school.getReportCard(foo);
school.getReportCard(bar);
school.getReportCard(qux);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');