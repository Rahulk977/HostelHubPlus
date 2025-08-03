export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';




export const isHostelAdmin = (user) => {
    return user && user.role === 'hostel-admin';
  }; 