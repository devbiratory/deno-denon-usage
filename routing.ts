import { Router } from "https://deno.land/x/oak/mod.ts";
import * as routeHandlers from "./handlers/allHandlers.ts";

const router = new Router();

// sample api routes 
router.post("/users", routeHandlers.allUsers);
router.post("/status", routeHandlers.activeStatus);

export default router;
