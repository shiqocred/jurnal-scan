import { NextFetchEvent, NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { convexAuthNextjsMiddleware } from "@convex-dev/auth/nextjs/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);
const authMiddleware = convexAuthNextjsMiddleware();

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const authResult = authMiddleware(request, event);
  if (authResult instanceof Response) return authResult;

  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
