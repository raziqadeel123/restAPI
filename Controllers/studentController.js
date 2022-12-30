import StudentModal from '../Models/Student.js';

class StudentController {
  static createStudent = (req, res) => {
    res.send('student Created');
  };

  static getAllStudent = (req, res) => {
    res.send('get all student');
  };

  static getSingleSingleById = (req, res) => {
    res.send('get single Student by Id');
  };

  static updateStudentById = (req, res) => {
    res.send('update single doc by Id');
  };

  static deleteStudentById = (req, res) => {
    res.send('delete single doc by Id');
  };
}

export default StudentController;
