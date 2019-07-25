export default function ({ app, redirect, route }) {
  if (!app.$auth.loggedIn) {
    return redirect(
      app.localePath({
        name: 'login',
        query: {
          redirect: route.fullPath
        }
      })
    )
  }
}
