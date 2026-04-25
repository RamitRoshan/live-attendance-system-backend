const { z } = require("zod");

const signupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["teacher", "student"]),
});

module.exports = { signupSchema };
