import { Avatar } from 'evergreen-ui'

export const ProfileAvatar = ({ user }) => {
  return (
    <>
      <Avatar
        src={user?.avatar_url}
        size={40}
      />
    </>
  )
}

export default ProfileAvatar
