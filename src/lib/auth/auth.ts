// utils/api.ts
import { jwtDecode } from 'jwt-decode'; 

interface JwtPayload {
  exp: number;
}

export interface DecodedAuthToken {
  iat: number;
  exp: number;
  username: string;
  permission_access: string;
  company_id: string;
  company_name: string;
  package: string;
}

export async function login(username: string, password: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const res = await fetch(`${baseUrl}`+`account/account.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok || data.status_code !== 200) {
      // Lempar error pakai message dari server
      throw new Error(data.status_message || "Login failed");
    }

    return data; // Biasanya data.token atau data.jwt, tergantung struktur response kamu
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}


export async function checkAuthOrRedirect(): Promise<boolean> {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");

    if (!token || isTokenExpired(token)) {
      localStorage.removeItem("token");
      window.location.href = "/";
      return false;
    }

    return true;
  }

  return false;
}


function isTokenExpired(token: string): boolean {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    return true; // Consider invalid token as expired
  }
}

export function getAuthInfo(): DecodedAuthToken | null {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    const decoded = jwtDecode<DecodedAuthToken>(token);
    return decoded;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
}