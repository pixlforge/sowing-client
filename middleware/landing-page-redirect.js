export default function ({ redirect }) {
  if (process.env.APP_ENV === 'local') {
    return
  }

  return redirect({ name: 'coming-soon' })
}
