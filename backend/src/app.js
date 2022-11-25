import express from 'express';
import logger from 'morgan';
import { PORT, LOGGER } from './config'; 

// Import routes
import { router as gameTypeRoutes } from './routes/gameType';

// Start application
const app = express();

// Settings
app.set('port', PORT);

// Midleware
app.use(logger(LOGGER));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/gameTypes', gameTypeRoutes);

export default app;