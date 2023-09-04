import { RoadmapRepository } from "@/infra/db/mysql/repositories/RoadmapRepository";
import { CreateRoadmap } from "@/usecases/roadmap/CreateRoadmap";
import { RoadmapCreateController } from "@/interfaces/controllers/api/v1/roadmap/RoadmapCreateController";
export class RoadmapInjector {
  constructor() {}
  getRoadmapCreateController(): RoadmapCreateController {
    const roadmapRepository = new RoadmapRepository();
    const usecase = new CreateRoadmap(roadmapRepository);
    return new RoadmapCreateController(usecase);
  }
}
