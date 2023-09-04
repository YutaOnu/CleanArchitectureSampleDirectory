import { Request } from "express";
import { RoadmapCreateRequest } from "@/interfaces/requests/api/v1/roadmap/RoadmapCreateRequest";
export function toRoadmapCreateRequest(req: Request): RoadmapCreateRequest {
  return new RoadmapCreateRequest(req.body.title, req.body.overview);
}
