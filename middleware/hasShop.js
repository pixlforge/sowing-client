export default function ({ app, redirect }) {
  if (!app.$auth.user.has_shop) {
    return redirect({ name: 'shop' })
  }
}
