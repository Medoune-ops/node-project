/**
 * Middleware de gestion globale des erreurs — à placer en dernier dans index.js.
 * Capture toute erreur transmise via next(err).
 */
function errorHandler(err, req, res, next) {
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Erreur interne du serveur';

  res.status(status).json({
    status: 'error',
    message,
  });
}

module.exports = { errorHandler };
