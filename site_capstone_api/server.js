const express = require("express")
const app = express()
const {cloudinary} = require('./utils/cloudinary');
const cors = require("cors")
const morgan = require("morgan")
const { PORT } = require("./config")
const { NotFoundError } = require("./utils/errors")
const security = require("./middleware/security")
const authRoutes = require("./routes/auth")
const surveyRouter = require("./routes/survey")
const chatbotRouter = require('./routes/chatbot');
const favRouter = require("./routes/favorites")
const listRouter = require("./routes/shoppingList")


// enable cross-origin resource sharing for all origins for all requests
// NOTE: in production, we'll want to restrict this to only the origin
// hosting our frontend.
app.use(cors())
// parse incoming requests with JSON payloads
app.use(express.json())
// log requests info
app.use(morgan("tiny"))

// for every request check if a token exists in authorization header
// if it does attach decoded user to rec.locals
app.use(security.extractUserFromJwt)
app.use("/auth", authRoutes)
app.use("/survey", surveyRouter)
app.use('/chatbot', chatbotRouter)
app.use('/list', listRouter)
app.use("/favorites", favRouter)
app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.get('/api/images', async (req, res) => {
  const { resources } = await cloudinary.search
      .expression('folder:dev_setups')
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});

/* app.post('https://api.cloudinary.com/v1_1/df16thior/image/upload', async (req, res) => {
  try {
      const fileStr = req.body.data;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
          upload_preset: 'upload',
      });
      console.log(uploadResponse);
      res.json({ msg: 'yaya' });
  } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Something went wrong' });
  }
}); */




/** Handle 404 errors -- this matches everything */
app.use((req, res, next) => {
  return next(new NotFoundError())
})

/** Generic error handler; anything unhandled goes here. */
app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message

  return res.status(status).json({
    error: { message, status },
  })
})



app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
