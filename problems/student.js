/* eslint-disable max-lines-per-function */

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    notes: {},

    info: function() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses: function() {
      console.log(this.courses);
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


let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advanced Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"