export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL ;




export const isHostelAdmin = (user) => {
    return user && user.role === 'hostel-admin';
  }; 