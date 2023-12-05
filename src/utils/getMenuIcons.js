import cubes from '../assets/svg/cubes.svg'
import message from '../assets/svg/message.svg'
import stats from '../assets/svg/stats.svg'
import users from '../assets/svg/users.svg'

export const GetMenuIcons = (icon) => {
    switch (icon) {
        case 'message':
            return message
        case 'users':
            return users
        case 'cubes':
            return cubes
        case 'stats':
            return stats
    }
}