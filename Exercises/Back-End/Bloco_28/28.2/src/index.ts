import express from 'express';
import multer from 'multer';
import { Request, Response } from 'express';
const app = express();

app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    if(file.mimetype !== 'image/jpeg') {
      return callback(new Error('Não pode'), `src/uploads`)
    }
    return callback(null, `src/uploads`)
  },
  filename: (req, file, callback) =>
    callback(null, `${Date.now()} - ${file.originalname}`),
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (_req: Request, res: Response) => {
  try {
    return res.status(201).json('Success');
  } catch (error: any) {
    console.log(error.message);
  }
});

app.listen(3000, () => 'server running on port 3333');
