import { fileURLToPath } from "node:url";
import path from "node:path";
import express from "express";
import index from "./routes/index.js";
import NotFoundError from "./middlewares/customError.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

app.use((req, res, next) => {
  next(new NotFoundError("Page Not Found"));
});
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res
    .status(statusCode)
    .render("error", { errorMessage: err.message || "Internal Server Error" });
});

const PORT = 3001;
const server = app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
