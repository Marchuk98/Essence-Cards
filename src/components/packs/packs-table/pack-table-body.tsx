import { Table, Typography } from '../../ui'
import { PATH } from '../../../common'
import { PackType } from '../../../services/packs/packs-endpoints/packs.types.ts'
import packImg from '../../../assets/images/react.png'
import { useNavigate } from 'react-router-dom'
import { Skeleton } from '../../ui/skeleton'
import { PacksTableActions } from '../packs-table-actions'

import s from './pack-table-body.module.scss'

type PackTableBodyType = {
  packContent: PackType[]
  isMe: string
  isFetching: boolean
}

export const PackTableBody = ({ packContent, isMe, isFetching }: PackTableBodyType) => {
  const navigate = useNavigate()

  return (
    <Table.Body>
      {packContent.map(item => (
        <Table.Row key={item.id}>
          <Table.TableCell>
            <div className={s.cellContent} onClick={() => navigate(`${PATH.CARDS}/${item.id}`)}>
              {isFetching ? (
                <>
                  <Skeleton width={120} height={48} />
                  <Skeleton width={60} height={24} />
                </>
              ) : (
                <>
                  {item.cover === null ? (
                    <img src={packImg} alt={'default icons name'} />
                  ) : (
                    <img className={s.cellImgContent} src={item.cover} alt={'icons for name'} />
                  )}
                  {item.name}
                </>
              )}
            </div>
          </Table.TableCell>
          <Table.TableCell>
            {isFetching ? (
              <Skeleton width={24} height={24} />
            ) : (
              <Typography variant={'body_2'}>{item.cardsCount}</Typography>
            )}
          </Table.TableCell>
          <Table.TableCell>
            {isFetching ? (
              <Skeleton width={100} height={24} />
            ) : (
              <Typography variant={'body_2'}>
                {new Date(item.updated).toLocaleString('ru')}
              </Typography>
            )}
          </Table.TableCell>
          <Table.TableCell>
            {isFetching ? (
              <Skeleton width={100} height={24} />
            ) : (
              <Typography variant={'body_2'}>{item.author.name}</Typography>
            )}
          </Table.TableCell>
          <Table.TableCell>
            {isFetching ? (
              <Skeleton width={70} height={24} />
            ) : (
              <PacksTableActions
                packContent={packContent}
                isActiveActions={item.userId === isMe}
                pack={{
                  id: item.id,
                  name: item.name,
                  isPrivate: item.isPrivate,
                  cover: item.cover,
                }}
              />
            )}
          </Table.TableCell>
        </Table.Row>
      ))}
    </Table.Body>
  )
}
