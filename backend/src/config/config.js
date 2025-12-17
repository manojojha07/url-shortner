export const cookieOptions = {
  httpOnly: true,
  secure: true,        // REQUIRED for HTTPS
  sameSite: "none",    // REQUIRED for cross-origin
  maxAge: 1000 * 60 * 60
};
