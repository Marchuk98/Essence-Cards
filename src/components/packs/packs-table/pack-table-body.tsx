import { Table, Typography } from '../../ui'
import { PATH } from '../../../common'
import { TableActionButton } from '../../ui/table-action-button/table-action-button.tsx'
import { usePacks } from '../../../services/packs/hooks/usePacks.ts'
import { ItemType } from '../../../services/packs/packs-endpoints/packs.types.ts'

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
            <Typography variant={'link_1'} as={'a'} href={`${PATH.CARDS}/${item.id}`}>
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
              pack={{ id: item.id, packName: item.name, isPrivate: item.isPrivate }}
            />
          </Table.TableCell>
        </Table.Row>
      ))}
    </Table.Body>
  )
}

