export const useRequest = (request, options) => {
    const config = useRuntimeConfig()

    let onRequest = ({ request, options }) => {
        // console.log('[on-request]', request, options)

        options.headers = options.headers || {}
        // TODO 增加TOKEN
        options.headers.Authorization = 'Bearer ' + 'access_token'
        options.headers.ContentType = 'application/json'

        // 增加时间戳
        options.query = options.query || {}
        options.query._ = new Date().getTime()
    }

    let onResponse = ({ request, response, options }) => {
        // console.log('[on-response] request:', request)
        // console.log('[on-response] response:', response)
        // console.log('[on-response] options:', options)
    }

    return new Promise((resolve, reject) => {
        try {
            useFetch(request, {
                ...Object.assign(
                    {
                        onRequest,
                        onResponse,
                    },
                    options,

                    // 不可更改请求
                    { initialCache: false, retry: 0 },
                ),
            })
                .then((response) => {
                    const { data, error } = response

                    if (error.value) {
                        console.log('[use-request] [error]', error)
                        const data = error.value
                        $toast.error(
                            `${data.statusCode} ${data.statusText}`,
                            null,
                            {
                                message: data.request,
                            },
                        )
                        return reject(error)
                    }

                    if (data.value) {
                        return resolve(data)
                    }

                    // 这里处理错你自定义的错误，例如code !== 1
                    throw createError({
                        statusCode: 500,
                        statusMessage: request,
                        message: '自己后端接口的报错信息',
                    })
                })
                .catch((err) => {
                    console.log('reject', err)

                    reject(err)
                })
        } catch (error) {
            console.error('[use-request] [catch]', error)
        }
    })
}
