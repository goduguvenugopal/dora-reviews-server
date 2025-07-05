// routes/reviewRoutes.js
const express = require("express");
const router = express.Router();
const {
  createReview,
  getReviewsByProduct,
  deleteReview,
} = require("../controller/reviewController");
const upload = require("../config/multer");

router.post("/add/reviews", upload.single("productReviewImg"), createReview);
router.get("/get/reviews/:productId", getReviewsByProduct);
router.delete("/delete/reviews/:id", deleteReview);

module.exports = router;
