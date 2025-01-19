/** Routes that accessible to the public
 *  these routes are not restricted by authentication
 *  @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/ai-tools",
  "/server-ai-tools",
  "/aca-video-desktop.mp4",
  "/aca-video-mobile.mp4",
];

/** Routes that are protected by authentication
 *  these routes will redirect logged in users to /profile
 *  @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/signup", "/auth/create"];

/** The default redirect path after a successful login
 *  @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";

