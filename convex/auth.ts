import Resend from "@auth/core/providers/resend";
import Github from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";

import { convexAuth } from "@convex-dev/auth/server";
import { ResendOTP } from "./ResendOTP";
import { Password } from "@convex-dev/auth/providers/Password";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Resend,
    Password({ verify: ResendOTP, reset: ResendOTP }),
    Github,
    Google,
  ],
});
