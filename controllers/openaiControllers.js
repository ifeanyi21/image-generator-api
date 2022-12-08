const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  try {
    const response = await openai.createImage({
      prompt: req.body.text,
      n: 1,
      size: "512x512",
    });

    const imageUrl = response.data.data[0].url;
    res.status(200).json({
      success: true,
      imageUrl,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Image could not be generated",
    });
  }
};

module.exports = { generateImage };
