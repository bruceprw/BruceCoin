const fs = require('fs');
const path = require('path');
const jsYaml = require('js-yaml');
const swaggerUi = require('swagger-ui-express');

function swaggerDocs(app, port) {
  try {
    const yamlPath = path.join(__dirname, '../docs/swagger.yaml');
    const swaggerDocument = jsYaml.load(fs.readFileSync(yamlPath, 'utf8'));

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
  } catch (error) {
    console.error('Error setting up Swagger:', error);
  }
}

module.exports = swaggerDocs;
