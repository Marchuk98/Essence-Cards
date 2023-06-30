import * as Avatar from '@radix-ui/react-avatar'
import * as Label from '@radix-ui/react-label'

import s from './avatar.module.scss'

export type UserAvatarProps = {
  name?: string
}

export const UserAvatar = (props: UserAvatarProps) => {
  const { name } = props

  return (
    <div className={s.wrapper}>
      {name && (
        <div className={s.label_wrapper}>
          <Label.Root className="LabelRoot" htmlFor="firstName">
            {name}
          </Label.Root>
        </div>
      )}
      <Avatar.Root className={s.AvatarRoot}>
        <Avatar.Image
          className={s.AvatarImage}
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
      </Avatar.Root>
    </div>
  )
}
