// Редирект 301 со страниц со слешем в конце на страницы без слеша (в конце)
// То есть будет редирект 301:
// с /users/ на /users, с /users/user-155/// на /users/user-155
export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path !== '/' && to.path.endsWith('/')) {
    const { path, query, hash } = to
    const nextPath = path.replace(/\/+$/, '') || '/'
    const nextRoute = { path: nextPath, query, hash }
    return navigateTo(nextRoute, { redirectCode: 301 })
    }
})