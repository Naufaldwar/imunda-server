const { Router } = require("express");
const router = Router();
const axios = require("axios");

router.get("/city", async (req, res) => {
  try {
    const apiKey = "c989dc4c3d61abcf05738ce739f02750";
    const response = await axios.get(
      `https://api.rajaongkir.com/starter/city?key=${apiKey}`
    );
    const cities = response.data.rajaongkir.results;
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
