import { Router } from 'express';
import { ProjectsRoutes } from '../modules/Projects/projects.route';
import { SkillsRoutes } from '../modules/Skills/skills.route';
import { UserRoutes } from '../modules/User/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/skills',
    route: SkillsRoutes,
  },
  {
    path: '/projects',
    route: ProjectsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
