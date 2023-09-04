import { Roadmap } from "@/domain/models/Roadmap";
import { RoadmapGateway } from "@/domain/gateways/RoadmapGateway";

export class CreateRoadmap {
  constructor(private _roadmapRepository: RoadmapGateway) {}
  handle(roadmap: Roadmap) {
    this._roadmapRepository.create(roadmap);
    return roadmap;
  }
}
