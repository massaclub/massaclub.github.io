export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    return {
        hello: 'Hello World!',
        message: body,
    }
})