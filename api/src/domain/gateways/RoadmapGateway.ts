import { Roadmap } from "@/domain/models/Roadmap";

export interface RoadmapGateway {
  create(roadmap: Roadmap): void;
}
