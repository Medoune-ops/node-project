const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur mon API REST' });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

// GET /task - Récupérer toutes les tâches
app.get('/task', (req, res) => {
  res.status(200).json(tasks);
});

// POST /tasks - Créer une nouvelle tâche
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Le titre de la tâche est obligatoire" });
  }

  const newTask = {
    id: tasks.length + 1,
    title: title,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});