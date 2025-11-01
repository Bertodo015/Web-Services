const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const path = require('path');
const fs = require('fs');

const dbPath = path.resolve(__dirname, 'dev.db');
const schemaPath = path.resolve(__dirname, 'schema.sql');

async function initializeDatabase() {
  try {
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });

    console.log('Conectado ao banco de dados SQLite.');

    const schema = fs.readFileSync(schemaPath, 'utf8');
    await db.exec(schema);
    
    console.log('Schema do banco de dados garantido/criado.');
    await db.close();
  } catch (error) {
    console.error('Erro ao inicializar o banco de dados:', error);
  }
}

// Executa a inicialização
if (require.main === module) {
  console.log('Executando script de inicialização do banco de dados...');
  initializeDatabase();
}

// Exporta a função de conexão para ser usada pelo modelo
module.exports = {
  openDb: () => open({ filename: dbPath, driver: sqlite3.Database })
};