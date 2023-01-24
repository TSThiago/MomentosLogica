console.log(ReturnMovieTimes(13 , 23, 60))

function ReturnMovieTimes(open, close, movieLength) {
    let movieTimes = [[open, 0]]
    let hour = movieTimes[0]
    while(hour[0] < close){
        hour[1] = hour[1] + movieLength
        if(hour[1] >= 60){
            hour[1] = hour[1] - 60
            hour[0] = hour[0] + 1
        }
        hour[1] = hour[1] + 15
        movieTimes.push(hour)
    }
    return movieTimes
}