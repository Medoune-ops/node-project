/**
 * Middleware de validation des requêtes.
 * Vérifie que le Content-Type est application/json pour les requêtes POST/PUT/PATCH,
 * et que le corps n'est pas vide lorsqu'il est attendu.
 */
function validateContentType(req, res, next) {
  const methodsWithBody = ['POST', 'PUT', 'PATCH'];

  if (methodsWithBody.includes(req.method)) {
    const contentType = req.headers['content-type'];

    if (!contentType || !contentType.includes('application/json')) {
      return res.status(415).json({
        status: 'error',
        message: "Content-Type doit être 'application/json'",
      });
    }

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        status: 'error',
        message: 'Le corps de la requête ne peut pas être vide',
      });
    }
  }

  next();
}

module.exports = { validateContentType };
