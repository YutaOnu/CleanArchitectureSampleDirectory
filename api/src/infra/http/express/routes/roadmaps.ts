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

// 下記をターミナルで実行して、動作確認できます
// curl -X POST -H "Content-Type: application/json" \
// -d '{
//   "title": "サンプルタイトル",
//   "overview": "サンプルの概要"
// }' \
// http://localhost:3000/roadmaps
