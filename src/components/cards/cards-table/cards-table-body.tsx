import { CardType } from '../../../services/packs/packs-endpoints/packs.types.ts'
import { Grades, GradeType, Table, Typography } from '../../ui'
import { ReadMore } from '../../ui/read-more'
import { CardsTableActions } from '../cards-table-actions'
import { BlurHashCanvas } from '../../ui/image'
import { Skeleton } from '../../ui/skeleton'

import s from './cards-table-body.module.scss'
import { memo } from 'react'

type CardTableBodyType = {
  cardContent: CardType[]
  openImageInModal: (src: string) => void
  isMe: boolean
  isFetching: boolean
}

export const CardsTableBody = memo(
  ({ cardContent, openImageInModal, isMe, isFetching }: CardTableBodyType) => {
    return (
      <Table.Body>
        {cardContent?.map(item => (
          <Table.Row key={item.id}>
            <Table.TableCell>
              <div className={s.cellContent}>
                {isFetching ? (
                  <Skeleton width={100} height={50} />
                ) : (
                  <>
                    {item.questionImg && (
                      <BlurHashCanvas
                        src={item.questionImg}
                        alt={'questionImg'}
                        blurWidth={70}
                        blurHeight={50}
                        className={s.cellImgContent}
                        onClick={() => openImageInModal(item.questionImg)}
                      />
                    )}
                  </>
                )}
                <div className={s.cellText}>
                  {isFetching ? (
                    <Skeleton width={100} height={24} />
                  ) : (
                    <ReadMore text={item.question} maxLength={15} />
                  )}
                </div>
              </div>
            </Table.TableCell>
            <Table.TableCell>
              <div className={s.cellContent}>
                {isFetching ? (
                  <Skeleton width={100} height={50} />
                ) : (
                  <>
                    {item.answerImg && (
                      <BlurHashCanvas
                        src={item.answerImg}
                        alt={'answerImg'}
                        blurWidth={100}
                        blurHeight={50}
                        className={s.cellImgContent}
                        onClick={() => openImageInModal(item.answerImg)}
                      />
                    )}
                  </>
                )}
                <div className={s.cellText}>
                  {isFetching ? (
                    <Skeleton width={100} height={24} />
                  ) : (
                    <ReadMore text={item.answer} maxLength={15} />
                  )}
                </div>
              </div>
            </Table.TableCell>
            <Table.TableCell>
              {isFetching ? (
                <Skeleton width={75} height={24} />
              ) : (
                <Typography variant={'body_2'}>
                  {new Date(item.updated).toLocaleString('ru')}
                </Typography>
              )}
            </Table.TableCell>
            <Table.TableCell>
              {isFetching ? (
                <Skeleton width={120} height={24} />
              ) : (
                <div>
                  <Grades onChange={() => {}} grade={item.grade as GradeType} />
                </div>
              )}
            </Table.TableCell>
            {isMe && (
              <Table.TableCell>
                {isFetching ? (
                  <Skeleton width={75} height={24} />
                ) : (
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
                )}
              </Table.TableCell>
            )}
          </Table.Row>
        ))}
      </Table.Body>
    )
  }
)
