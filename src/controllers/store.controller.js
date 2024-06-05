import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { insertReview } from "../services/store.service.js";

// 리뷰 작성
export const addReview = async (req, res, next) => {
  console.log("리뷰 작성을 요청하였습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(
    response(status.SUCCESS, await insertReview(req.params.storeId, req.body))
  );
};
