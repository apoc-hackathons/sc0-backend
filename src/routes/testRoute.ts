import express, { Application, Request, Response } from 'express';
import Test from '../models/Test';
import { body, validationResult } from 'express-validator';

const router = express.Router();

const validateTest = [
    body('questionId').isString(),
    body('option').isNumeric(),
];

router.post("/testcheck", express.json(), validateTest, async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {questionId, option} = req.body;
    try {
      const ans = await Test.findOne({ _id: questionId });
      if(!ans) {
        return res.status(400).send({ error: 'Question not found' });
      }
        res.json({correctIndex: ans.correctAns }).status(200);
    } catch(err) {
      console.error(err);
      res.status(500).send({ error: 'An error occurred' });
    }
});