export default function ({ app, route, redirect }) {
  if (process.env.APP_ENV === 'local') {
    return
  }

  if (
    app.i18n.locales.map((locale) => {
      return locale.code
    }).find((locale) => {
      return route.path === app.localePath({ name: 'coming-soon' }, locale)
    })
  ) {
    return
  }

  return redirect(app.localePath({ name: 'coming-soon' }))
}
