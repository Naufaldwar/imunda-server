const { Router } = require("express");
const router = Router();
const axios = require("axios");

router.get("/city", async (req, res) => {
  try {
    const apiKey = "520f9b99617a9af001a9b4a2d4c31717";
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
    const { key, origin, destination, weight, courier } = req.body;

    // Lakukan logika pemrosesan atau panggil fungsi untuk menghitung ongkos kirim menggunakan parameter yang diterima

    // Contoh penggunaan Axios untuk mengirim permintaan POST ke RajaOngkir API
    const response = await axios.post(
      "https://api.rajaongkir.com/starter/cost",
      {
        origin,
        destination,
        weight,
        courier,
      },
      {
        headers: {
          key,
        },
      }
    );

    res.json(response.data.rajaongkir.results);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
