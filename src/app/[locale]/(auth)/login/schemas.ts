import { z } from "zod";

export const loginEmailSchema = (t: (key: string) => string) => {
  return z.object({
    email: z.string().email(t("form.error.email")),
  });
};

export const loginPasswordSchema = (t: (key: string) => string) => {
  return z.object({
    email: z.string().email(t("form.error.email")),
    password: z
      .string()
      .min(8, {
        message: t("form.error.password.char"),
      })
      .regex(/(?=.*[A-Z])/, {
        message: t("form.error.password.capital"),
      })
      .regex(/(?=.*\d)/, {
        message: t("form.error.password.number"),
      })
      .regex(/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/, {
        message: t("form.error.password.symbol"),
      }),
  });
};
