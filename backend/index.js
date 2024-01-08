const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User'); // Import the User model
const Contactinfo = require('./models/Contactinfo')
const multer = require('multer');
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/international_insights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the User registration route
app.post('/register', async (req, res) => {
  try {
    const { firstname, lastname, email, city, subject, phoneno } = req.body;

    // Create a new User document and save it to the database
    const contactinfo = new Contactinfo({ firstname, lastname, email, city, subject, phoneno });
    await contactinfo.save();

    res.json({ message: 'Registration successful', contactinfo });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});

// Define a route to retrieve and display user data
app.get('/users', async (req, res) => {
  try {
    // Retrieve all user documents from the database
    const users = await Contactinfo.find();
    res.json({ users });
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ message: 'Error retrieving users', error: error.message });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/components/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });
app.post("/upload-image", upload.single("image"), async (req, res) => {
  const { name, province, country, collegeName } = req.body;
  const imageName = req.file.filename;

  try {
    await User.create({ image: imageName, name, province, country, collegeName });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});
app.get("/get-image", async (req, res) => {
  try {
    User.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});
app.get('/provinces', async (req, res) => {
  try {
    // Replace 'province' with the actual field name in your 'User' collection
    const distinctProvinces = await User.distinct('province');
    res.json({ provinces: distinctProvinces });
  } catch (error) {
    console.error('Error fetching provinces:', error);
    res.status(500).json({ message: 'Error fetching provinces', error: error.message });
  }
});
// Define a route to retrieve details based on the "province" parameter
app.get('/api/details', async (req, res) => {
  try {
    const { province } = req.query;

    // Replace 'User' with the actual model name and 'province' with the actual field name in your model.
    const userDetails = await User.find({ province });

    if (!userDetails) {
      return res.status(404).json({ message: 'Details not found' });
    }

    res.json(userDetails);
  } catch (error) {
    console.error('Error fetching details:', error);
    res.status(500).json({ message: 'Error fetching details', error: error.message });
  }
});
