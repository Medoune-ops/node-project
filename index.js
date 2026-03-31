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

const validateTask = (req, res, next) => {
    const { title } = req.body;
    
    if (!title || title.trim() === "") {
        return res.status(400).json({ error: "Le titre de la tâche est obligatoire." });
    }
    
    next(); 
};

router.get('/', taskController.getAllTasks); // READ ALL
router.get('/:id', taskController.getTaskById); // READ ONE
router.post('/', validateTask, taskController.createTask); // CREATE (avec middleware !)
router.put('/:id', validateTask, taskController.updateTask); // UPDATE (avec middleware !)
router.delete('/:id', taskController.deleteTask); // DELETE

module.exports = router;

// ... tes autres routes ...
app.use('/api/tasks', taskRoutes);

// Middleware 404 Global (Doit être en dernier !)
app.use((req, res) => {
    res.status(404).json({ error: "Oups ! Cette route n'existe pas." });
});
