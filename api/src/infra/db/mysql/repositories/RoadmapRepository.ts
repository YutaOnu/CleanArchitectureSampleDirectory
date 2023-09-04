import { RoadmapGateway } from "@/domain/gateways/RoadmapGateway";
import { Roadmap } from "@/domain/models/Roadmap";
export class RoadmapRepository implements RoadmapGateway {
  create(roadmap: Roadmap): void {
    // mysqlの保存処理を書く
  }
}
