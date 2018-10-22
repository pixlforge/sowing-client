export default function ({ route, redirect }) {
  if (route.path === '/') {
    redirect('301', '/fr');
  }
}