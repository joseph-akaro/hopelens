'use server';
import { auth } from '@/lib/auth/server';
import { redirect } from 'next/navigation';

export async function updateProfile(formData: FormData) {
  const { data: session } = await auth.getSession();

  if (!session?.user) {
    redirect('/auth/sign-in');
  }
}