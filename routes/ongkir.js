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

router.post("/cost", async (req, res) => {
  try {
    const { origin, destination, weight, courier } = req.body;
    const apiKey = "c989dc4c3d61abcf05738ce739f02750";

    // Lakukan logika pemrosesan atau panggil fungsi untuk menghitung ongkos kirim menggunakan parameter yang diterima

    // Contoh penggunaan Axios untuk mengirim permintaan POST ke RajaOngkir API
    const response = await axios.post(
      `https://api.rajaongkir.com/starter/cost?key=${apiKey}`,
      {
        origin,
        destination,
        weight,
        courier,
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
