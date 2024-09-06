import express from "express";
import {register} from "../services/userService";

const router = express.Router();

router.post("/register", async (request, response) => {
  const { firstName, lastName, email, password } = request.body;
  const result = await register({ firstName, lastName, email, password });

  if (result.error) {
    
  }
});

export default router;
