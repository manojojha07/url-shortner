import { redirect } from '@tanstack/react-router'
import { login } from "../store/slice/authSlice";
import { getCurrentUser } from '../api/User.api'



export const checkAuth = async ({ context }) => {
  const { queryClient, store } = context;

  try {
    const user = await queryClient.ensureQueryData({
      queryKey: ['currentUser'],
      queryFn: getCurrentUser,
    });

    if (!user) {
      return redirect({ to: '/auth' });
    }

    store.dispatch(login(user));
    const { isAuthenticated } = store.getState().auth;

    if (!isAuthenticated) {
      return redirect({ to: '/auth' });
    }

    return true;
  } catch (error) {
    console.error('Auth check failed:', error);
    return redirect({ to: '/auth' });
  }
};
