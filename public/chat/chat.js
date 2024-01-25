const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const openai = new OpenAI(OPENAI); // Replace 'your-api-key' with your OpenAI API key

const startingPrompt = "This is the starting prompt."; // Add your desired starting prompt here

app.post("/ask", async (req, res) => {
  try {
    const { prompt } = req.body;
    const fullPrompt = startingPrompt + "\n" + prompt; // Combine starting prompt with user prompt
    const response = await openai.complete({
      engine: "text-davinci-003",
      prompt: fullPrompt,
      maxTokens: 150,
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
