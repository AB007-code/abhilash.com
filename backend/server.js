import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import routeHandler from "./routes/router.js";

dotenv.config();

let port = process.env.PORT || 5000;
const app = express();
const allowedFileTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024,
    files: 3,
  },
  fileFilter: (_req, file, cb) => {
    if (allowedFileTypes.has(file.mimetype)) {
      cb(null, true);
      return;
    }

    cb(
      new multer.MulterError(
        "LIMIT_UNEXPECTED_FILE",
        `${file.originalname} has an unsupported file type.`
      )
    );
  },
});

const allowedOrigins = [
  process.env.FRONTEND_LINK,
  process.env.FRONTEND_DEV_LINK,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
].filter(Boolean);

app.use(express.json());
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (!origin || allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin || "*");
    res.header("Vary", "Origin");
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
  }

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  return next();
});

app.post("/send-email", upload.array("attachments", 3), routeHandler);
app.get("/", (_req, res) => {
  res.json({
    status: "ok",
    allowedOrigins,
  });
});
app.use((err, _req, res, _next) => {
  void _next;

  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        message: "Each attachment must be 10MB or smaller.",
      });
    }

    return res.status(400).json({
      success: false,
      message:
        err.field && err.code === "LIMIT_UNEXPECTED_FILE"
          ? "Only JPG, PNG, WEBP, PDF, DOC, and DOCX files are allowed."
          : "Attachment upload failed.",
    });
  }

  return res.status(500).json({
    success: false,
    message: "Server error while processing the request.",
  });
});
app.listen(port, () => {
  console.log("Backend is running");
});
