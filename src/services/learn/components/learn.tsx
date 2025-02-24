import { GradeType, Page } from '../../../components/ui'
import { LearnPack } from '../../../components/learn-pack'
import { useParams } from 'react-router-dom'
import {
  useGetPackQuery,
  useLearnPackQuery,
  useUpdateCardGradeMutation,
} from '../../packs/packs-endpoints/packs.api.ts'
import { MainLoader } from '../../../assets/loaders/main-loader'

export const Learn = () => {
  const { id } = useParams()
  const { data: pack, isLoading } = useGetPackQuery({ id: id || '' })
  const [updateGrade] = useUpdateCardGradeMutation()
  const { data: randomCard } = useLearnPackQuery({ id: id || '' })

  return (
    <Page flexTb>
      {isLoading && <MainLoader />}
      {pack && randomCard && (
        <LearnPack
          packName={pack.name}
          numberEfforts={randomCard.shots}
          question={randomCard.question}
          questionImg={randomCard.questionImg}
          answer={randomCard.answer}
          answerImg={randomCard.answerImg}
          loadNextQuestion={data =>
            updateGrade({
              id: pack.id,
              grade: +data as GradeType,
              cardId: randomCard.id,
            })
          }
        />
      )}
    </Page>
  )
}
