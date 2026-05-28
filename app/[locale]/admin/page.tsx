import { redirect } from 'next/navigation'

/*
  Admin root redirect
  Automatically redirects to login page
*/

export default async function AdminRoot({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  redirect(`/${locale}/admin/login`)
}
