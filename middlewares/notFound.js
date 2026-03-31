/**
 * Middleware 404 — à placer après toutes les routes.
 * Intercepte toute requête qui n'a pas correspondu à une route définie.
 */
function notFound(req, res, next) {
  res.status(404).json({
    status: 'error',
    message: `La route '${req.method} ${req.originalUrl}' n'existe pas`,
  });
}

module.exports = { notFound };
