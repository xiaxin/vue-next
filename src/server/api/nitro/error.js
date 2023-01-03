export default defineEventHandler((event) => {
    let query = getQuery(event)
    let code = query.code ? query.code : 404

    return createError({
        statusCode: code,
    })
})
