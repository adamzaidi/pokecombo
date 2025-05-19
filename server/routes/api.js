import express from 'express';
import supabase from '../supabase.js';

const router = express.Router();

router.post('/team', async (req, res) => {
  const { teamName, members } = req.body;
  const { data, error } = await supabase.from('teams').insert([{ team_name: teamName, members }]);
  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.get('/teams', async (req, res) => {
  const { data, error } = await supabase.from('teams').select('*');
  if (error) return res.status(400).json({ error });
  res.json(data);
});

export default router;