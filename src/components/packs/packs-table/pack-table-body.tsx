import { Table, Typography } from '../../ui'
import { PATH } from '../../../common'
import { TableActionButton } from '../../ui/table-action-button'
import { usePacks } from '../../../services/packs/hooks/usePacks.ts'
import { ItemType } from '../../../services/packs/packs-endpoints/packs.types.ts'
import icons from '../../../assets/images/react.png'

import s from './pack-table-body.module.scss'

type PackTableBodyType = {
  packContent: ItemType[]
}

export const PackTableBody = ({ packContent }: PackTableBodyType) => {
  const { isMe } = usePacks()

  return (
    <Table.Body>
      {packContent.map(item => (
        <Table.Row key={item.id}>
          <Table.TableCell>
            <Typography
              className={s.cellContent}
              variant={'link_1'}
              as={'a'}
              href={`${PATH.CARDS}/${item.id}`}
            >
              {item.cover === null ? (
                <img src={icons} alt={'default icons name'} />
              ) : (
                <img className={s.cellImgContent} src={item.cover} alt={'icons for name'} />
              )}
              {item.name}
            </Typography>
          </Table.TableCell>
          <Table.TableCell>
            <Typography variant={'body_2'}>{item.cardsCount}</Typography>
          </Table.TableCell>
          <Table.TableCell>
            <Typography variant={'body_2'}>
              {new Date(item.updated).toLocaleString('ru')}
            </Typography>
          </Table.TableCell>
          <Table.TableCell>
            <Typography variant={'body_2'}>{item.author.name}</Typography>
          </Table.TableCell>
          <Table.TableCell>
            <TableActionButton
              isActiveActions={item.userId === isMe}
              pack={{ id: item.id, name: item.name, isPrivate: item.isPrivate, cover: item.cover }}
            />
          </Table.TableCell>
        </Table.Row>
      ))}
    </Table.Body>
  )
}

