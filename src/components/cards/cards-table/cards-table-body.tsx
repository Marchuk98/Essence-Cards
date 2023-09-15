import { CardType } from '../../../services/packs/packs-endpoints/packs.types.ts'
import { Grades, GradeType, Table, Typography } from '../../ui'
import { ReadMore } from '../../ui/read-more'
import { CardsTableActions } from '../../ui/table-action-button/cards-table-actions'

import s from './cards-table-body.module.scss'

type CardTableBodyType = {
  cardContent: CardType[]
  openImageInModal: (src: string) => void
  isMe: boolean
  isMyPack: boolean
}

export const CardsTableBody = ({ cardContent, openImageInModal, isMe }: CardTableBodyType) => {
  return (
    <Table.Body>
      {cardContent.map(item => (
        <Table.Row key={item.id}>
          <Table.TableCell>
            <div className={s.cellContent}>
              {item.questionImg === null ? (
                ''
              ) : (
                <img
                  src={item.questionImg}
                  alt={'questionImg'}
                  width={'70px'}
                  height={'50px'}
                  className={s.cellImgContent}
                  onClick={() => openImageInModal(item.questionImg)}
                  style={{ cursor: 'pointer' }}
                />
              )}
              <div className={s.cellText}>
                <ReadMore text={item.question} maxLength={15} />
              </div>
            </div>
          </Table.TableCell>
          <Table.TableCell>
            <div className={s.cellContent}>
              {item.answerImg === null ? (
                ''
              ) : (
                <img
                  src={item.answerImg}
                  alt={'answerImg'}
                  width={'70px'}
                  height={'50px'}
                  className={s.cellImgContent}
                  onClick={() => openImageInModal(item.answerImg)}
                />
              )}
              <div className={s.cellText}>
                <ReadMore text={item.answer} maxLength={15} />
              </div>
            </div>
          </Table.TableCell>
          <Table.TableCell>
            <Typography variant={'body_2'}>
              {new Date(item.updated).toLocaleString('ru')}
            </Typography>
          </Table.TableCell>
          <Table.TableCell>
            <div>
              <Grades onChange={() => {}} grade={item.grade as GradeType} />
            </div>
          </Table.TableCell>

          {isMe && (
            <Table.TableCell>
              <CardsTableActions
                isActiveActions={isMe}
                card={{
                  id: item.id,
                  question: item.question,
                  answer: item.answer,
                  questionImg: item.questionImg,
                  answerImg: item.answerImg,
                }}
              />
            </Table.TableCell>
          )}
        </Table.Row>
      ))}
    </Table.Body>
  )
}