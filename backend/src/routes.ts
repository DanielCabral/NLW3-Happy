import { Router } from 'express';
import multer from 'multer';
import OrphanagesController from './controllers/OrphanagesController'
import uploadConfig from './config/upload'
const routes = Router();

const upload = multer(uploadConfig);

routes.get('/', OrphanagesController.index);

routes.get('/:id', OrphanagesController.show);

routes.post('/', upload.array('images'), OrphanagesController.create);
export default routes;