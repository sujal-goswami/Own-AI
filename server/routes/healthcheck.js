// this is healthcheck route
import { Router } from 'express';

const healthcheck = async (req, res) => {
    return res
        .status(200)
        .send('HealthCheck passed: Server is up and running !');
}

const router = Router();

router.route('/').get(healthcheck);

export default router;

