import express from "express";
import { getAllHisLink, saveHisLink } from "../controllers/saveHistoryLink.js";
import { getAllViewHistory, saveViewHistory } from "../controllers/saveViewHistory.js";

const router = express.Router();

router.post('/add-history',saveHisLink)
router.get('/get-history',getAllHisLink)
router.post('/add-view-history',saveViewHistory)
router.get('/get-view-history',getAllViewHistory)
export default router;