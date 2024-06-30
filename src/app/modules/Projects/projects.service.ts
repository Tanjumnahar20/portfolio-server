import { TProjects } from './projects.interface';
import { Projects } from './projects.model';

const createProjectIntoDB = async (payload: TProjects) => {
  const result = await Projects.create(payload);
  return result;
};

const getAllProjectsFromDB = async () => {
  const result = await Projects.find();
  return result;
};

const getSingleProjectFromDB = async (id: string) => {
  const result = await Projects.findById(id);
  return result;
};

const updateProjectIntoDB = async (id: string, payload: Partial<TProjects>) => {
  console.log('update project', id, payload);
};

const deleteProjectFromDB = async (id: string) => {
  const result = await Projects.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    },
  );
  return result;
};

export const ProjectsServices = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  getSingleProjectFromDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
};
