import StudentModal from '../Models/Student.js';

class StudentController {
  static createStudent = async (req, res) => {
    try {
      // const newStudent = new StudentModel(req.body)
      const { name, age, fees } = req.body;
      const newStudent = new StudentModal({
        name: name,
        age: age,
        fees: fees,
      });
      const result = await newStudent.save();
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
    }
  };

  static getAllStudent = async (req, res) => {
    try {
      const result = await StudentModal.find();
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  };

  static getSingleSingleById = async (req, res) => {
    try {
      const result = await StudentModal.findById(req.params.id);
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  };

  static updateStudentById = async (req, res) => {
    try {
      const result = await StudentModal.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

  static deleteStudentById = async (req, res) => {
    try {
      const result = await StudentModal.findByIdAndDelete(req.params.id);
      res.status(204).send(result);
    } catch (error) {
      console.log(error);
    }
  };
}

export default StudentController;
