export default function ({ app, redirect }) {
  if (process.env.APP_ENV === 'local') {
    return
  }

  return redirect(app.localePath({
    name: 'coming-soon'
  }))
}
