import PropTypes from 'prop-types'

import { FriendListItem } from 'components/FriendListItem/FriendListItem'
 
export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list"> 
            {
                friends.length > 0 && friends.map(({id, avatar, isOnline, name}) => {
                    return (<FriendListItem
                        key={id}
                        avatar={avatar}
                        isOnline={isOnline}
                        name={name}
                    />)
                })
            }
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    )
}
