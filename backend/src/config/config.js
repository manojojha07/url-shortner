export const cookieOptions = {
    httpOnly: true,
    secure: false, // ✅ use false for localhost (true for prod HTTPS)
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 // 1 hour
};