const { Router } = require("express");
const List = require("../models/List");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const lists = await List.find();
    if (!lists) throw new Error("No items");
    const sorted = lists.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    res.status(200).json(sorted);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
});

router.post("/", async (req, res) => {
  const newList = new List(req.body);
  try {
    const list = await newList.save();
    if (!list) throw new Error("Something went wrong saving the list");
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await List.findByIdAndUpdate(id, req.body);
    if (!response) throw Error("Something went wrong ");
    const updated = { ...response._doc, ...req.body };
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await List.findByIdAndDelete(id);
    if (!removed) throw Error("Something went wrong ");
    res.status(200).json(removed);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

module.exports = router;
