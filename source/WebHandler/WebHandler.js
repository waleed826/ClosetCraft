export const ApiCall = async ({ URL, verb, bodyparams }) => {
    try {
        const Url = `${URL}`
        let option = {
            method: verb,
            body: bodyparams,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // Authorization : `Bearer ${token}`
            }
        }
        const response = await fetch(Url, option)
        if (response) {
            return await response.json()
        }
        else {
            return response
        }
    } catch (e) {
        return e.toString()
    }
}