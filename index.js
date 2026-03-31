const express = require('express');
const { validateContentType } = require('./middlewares/validate');
const { notFound } = require('./middlewares/notFound');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(validateContentType);

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur mon API REST' });
});

// Gestion des routes inexistantes (404)
app.use(notFound);

// Gestion globale des erreurs
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
