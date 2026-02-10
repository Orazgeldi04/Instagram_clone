import type { H3Event } from 'h3';

interface RegisterRequestBody {
  email: string;
  fullname: string;
  username: string;
  password: string;
}

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event) as RegisterRequestBody;
    
    // Validate required fields
    if (!body.email || !body.fullname || !body.username || !body.password) {
      return {
        success: false,
        message: 'Tüm alanların doldurulması zorunludur'
      };
    }

    // Basic validation
    if (body.password.length < 6) {
      return {
        success: false,
        message: 'Şifre en az 6 karakter uzunluğunda olmalıdır'
      };
    }

    if (!isValidEmail(body.email)) {
      return {
        success: false,
        message: 'Geçerli bir e-posta adresi giriniz'
      };
    }

    // Check if user already exists (this would connect to your database in a real implementation)
    // For now, we'll simulate checking against a database
    // const existingUser = await checkUserExists(body.email, body.username);
    // if (existingUser) {
    //   return {
    //     success: false,
    //     message: 'Bu e-posta veya kullanıcı adı zaten kullanılıyor'
    //   };
    // }

    // In a real implementation, you would hash the password and save to database
    // const hashedPassword = await hashPassword(body.password);
    // const newUser = await createUser({
    //   email: body.email,
    //   fullname: body.fullname,
    //   username: body.username,
    //   password: hashedPassword
    // });

    // Return success response
    return {
      success: true,
      message: 'Kullanıcı başarıyla oluşturuldu',
      user: {
        id: Math.floor(Math.random() * 1000000), // Simulated ID
        email: body.email,
        fullname: body.fullname,
        username: body.username
      }
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      message: 'Kayıt işlemi sırasında bir hata oluştu'
    };
  }
});

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}