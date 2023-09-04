import express from "express";
const router = express.Router();
import { RoadmapInjector } from "@/infra/http/express/injector/RoadmapInjector";
import { toRoadmapCreateRequest } from "@/infra/http/express/adapters/roadmap/toCreateRequest";
const injector = new RoadmapInjector();

router.post("/", (req: express.Request, res: express.Response) => {
  const roadmapCreateRequest = toRoadmapCreateRequest(req);
  const response = injector
    .getRoadmapCreateController()
    .handle(roadmapCreateRequest);
  // ここは適当
  res.send("respond with a create" + JSON.stringify(response));
});
module.exports = router;
