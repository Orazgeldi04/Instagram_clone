import type { H3Event } from 'h3';

interface LoginRequestBody {
  email: string;
  password: string;
}

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event) as LoginRequestBody;
    
    // Validate required fields
    if (!body.email || !body.password) {
      return {
        success: false,
        message: 'E-posta ve şifre alanları zorunludur'
      };
    }

    if (!isValidEmail(body.email)) {
      return {
        success: false,
        message: 'Geçerli bir e-posta adresi giriniz'
      };
    }

    // In a real implementation, you would verify credentials against your database
    // const user = await findUserByEmailAndPassword(body.email, body.password);
    // if (!user) {
    //   return {
    //     success: false,
    //     message: 'E-posta veya şifre hatalı'
    //   };
    // }

    // For simulation purposes, return a mock user
    return {
      success: true,
      message: 'Giriş başarılı',
      user: {
        id: Math.floor(Math.random() * 1000000),
        email: body.email,
        fullname: 'Test User',
        username: 'testuser'
      },
      token: 'mock-jwt-token-for-testing'
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      message: 'Giriş işlemi sırasında bir hata oluştu'
    };
  }
});

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}