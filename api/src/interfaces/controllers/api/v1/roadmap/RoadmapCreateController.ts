import { Roadmap } from "@/domain/models/Roadmap";
import { CreateRoadmap } from "@/usecases/roadmap/CreateRoadmap";
import { RoadmapCreateRequest } from "@/interfaces/requests/api/v1/roadmap/RoadmapCreateRequest";
export class RoadmapCreateController {
  constructor(private _usecase: CreateRoadmap) {}
  // 戻り値は一旦Roadmapを返すようにしています
  handle(req: RoadmapCreateRequest): Roadmap {
    const roadmap = new Roadmap(req.title, req.overview);
    return this._usecase.handle(roadmap);
  }
}
