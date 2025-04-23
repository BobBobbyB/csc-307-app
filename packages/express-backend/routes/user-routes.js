import express from 'express';
import {
  findAllUsers,
  findUserByName,
  findUserByJob,
  findUserByNameAndJob,
  findUserById,
  deleteUserById,
  createUser
} from '../services/user-services.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { name, job } = req.query;
  let users;
  if (name && job) {
    users = await findUserByNameAndJob(name, job);
  } else if (name) {
    users = await findUserByName(name);
  } else if (job) {
    users = await findUserByJob(job);
  } else {
    users = await findAllUsers();
  }
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const user = await findUserById(req.params.id);
  res.json(user);
});

router.post('/', async (req, res) => {
  const newUser = await createUser(req.body);
  res.status(201).json(newUser);
});

router.delete('/:id', async (req, res) => {
  await deleteUserById(req.params.id);
  res.status(204).send();
});

export default router;

