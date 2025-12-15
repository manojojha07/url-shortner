import cluster from 'cluster';
import os from 'os';
import createServer from './src/server/server.js'; 
import dotenv from 'dotenv';
dotenv.config();

const numCPUs = 4;  // ya os.cpus().length

if (cluster.isMaster) {
  // console.log(`👑 Master PID: ${process.pid}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    // console.log(`⚠️ Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });

} else {
  const app = createServer();

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    // console.log(`🚀 Worker ${process.pid} running on port ${PORT}`);
  });
}
