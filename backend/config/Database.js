import { Sequelize } from "sequelize";

const db = new Sequelize ('bsflbr6hrynuarge68ox','ujr1lum4ux4slcpb','hVY5rdHUNTA0oiWbyEkY', {
    host: 'bsflbr6hrynuarge68ox-mysql.services.clever-cloud.com',
    dialect: 'mysql'
});

export default db;