import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/looger';

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('Database connected successfully');

    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    errorLogger.error('Failed to connect database');
  }
}

bootstrap();
