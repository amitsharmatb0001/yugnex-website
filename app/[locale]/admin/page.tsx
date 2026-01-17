import { redirect } from 'next/navigation'

/*
  Admin root redirect
  Automatically redirects to login page
*/

export default function AdminRoot() {
    redirect('./admin/login')
}
