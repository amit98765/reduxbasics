export function requestMovies() {
    return new Promise(resolve =>
        setTimeout(() =>
            resolve([
                { title: 'Rebel without a Cause', date: 'Monday' },
                { title: 'Ghost in the shell', date: 'Tuesday' },
                { title: 'High Noon', date: 'Monday' }
            ])
            , 1000)
    )
}