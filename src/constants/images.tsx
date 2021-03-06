export const GENREIMAGES = function findImage(genre: String){
    if(genre.toUpperCase() === 'ACTION')
        return require('../images/action.png')
    if(genre.toUpperCase() === 'ADVENTURE')
        return require('../images/adventure.png')
    if(genre.toUpperCase() === 'ANIMATION')
        return require('../images/animation.png')
    if(genre.toUpperCase() === 'CHILDREN')
        return require('../images/children.png')
    if(genre.toUpperCase() === 'COMEDY')
        return require('../images/comedy.png')
    if(genre.toUpperCase() === 'CRIME')
        return require('../images/crime.png')
    if(genre.toUpperCase() === 'DOCUMENTARY')
        return require('../images/documentary.png')
    if(genre.toUpperCase() === 'DRAMA')
        return require('../images/drama.png')
    if(genre.toUpperCase() === 'FANTASY')
        return require('../images/fantasy.png')
    if(genre.toUpperCase() === 'FILM-NOIR')
        return require('../images/film-noir.png')
    if(genre.toUpperCase() === 'HORROR')
        return require('../images/horror.png')
    if(genre.toUpperCase() === 'MUSICAL')
        return require('../images/musical.png')
    if(genre.toUpperCase() === 'MYSTERY')
        return require('../images/mistery.png')
    if(genre.toUpperCase() === 'ROMANCE')
        return require('../images/romance.png')
    if(genre.toUpperCase() === 'SCI-FI')
        return require('../images/sci-fi.png')
    if(genre.toUpperCase() === 'THRILLER')
        return require('../images/thriller.png')
    if(genre.toUpperCase() === 'WAR')
        return require('../images/war.png')
    if(genre.toUpperCase() === 'WESTERN')
        return require('../images/western.png')

    else
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXm8Wq1Wq4usW2gRvdoMk3MJx3wSaIXpJKjx_q7iEYD_1hhca8&usqp=CAU';
}

export const NOTFOUND = require('../images/popcorn.png')

export const IMAGE_NOT_FOUND = require('../images/image-not-found.png')


export const USER_NOT_FOUND = require('../images/user-not-found.jpg')