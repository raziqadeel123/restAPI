import express from 'express';
import StudentController from '../Controllers/studentController.js';

const router = express.Router();

router.get('/', StudentController.getAllStudent);
router.get('/:id', StudentController.getSingleSingleById);
router.post('/', StudentController.createStudent);
router.put('/:id', StudentController.updateStudentById);
router.post('/:id', StudentController.deleteStudentById);

export default router;
