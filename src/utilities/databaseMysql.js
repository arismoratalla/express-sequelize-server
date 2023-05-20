import { Sequelize } from 'sequelize';

export default async function mysqlConnection() {
    const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
        host: process.env.HOST,
        dialect: 'mysql',
    });

    sequelize.authenticate()
        .then(() => {
            console.log(`Successfully Connected to ${process.env.HOST}`);

            // Sync the model with the database
            console.log(`Synchroning database...`);
            sequelize.sync()
            .then(() => {
                console.log('Database synced');
            })
            .catch((error) => {
                console.error('Error syncing database:', error);
            });
        })
        .catch((err) => {
            console.log("Error connecting to database!", err);
        });
}