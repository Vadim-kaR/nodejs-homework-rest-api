const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody, authenticate } = require("../../middelwares");
const { schemas } = require("../../models/contacts");
const { ctrlWrapper } = require("../../helpers");
const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAllContacts));

router.get("/:id", authenticate, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addNewContact)
);

router.delete("/:id", authenticate, ctrlWrapper(ctrl.removeContactById));

router.patch(
  "/:id/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

router.put(
  "/:id",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContactById)
);

module.exports = router;
