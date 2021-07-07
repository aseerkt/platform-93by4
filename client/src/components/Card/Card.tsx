import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { LockIcon, CardText, CheckList } from '../'
import { CheckListType } from '../../data/staticData/mark15'
import { theme } from '../../themes'
import { handleMarksChecked } from './handlers'

interface CardPropType extends CheckListType {
  collapsible?: boolean
  status?: string
  id: string
  title?: string
  subTitle?: string | JSX.Element
  link?: string
  index?: number
  lockIcon?: boolean
  setAllMarksChecked?: Dispatch<SetStateAction<string[]>>
}

export function Card({
  collapsible,
  status,
  id,
  title,
  subTitle,
  link,
  checks,
  index,
  setAllMarksChecked,
  lockIcon,
}: CardPropType) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [checkCount, setCheckCount] = useState<string[]>([])

  useEffect(() => {
    if (checks) {
      handleMarksChecked(
        id,
        checks.length,
        checkCount.length,
        setAllMarksChecked
      )
    }
  }, [checks, id, setAllMarksChecked, checkCount])

  return (
    <Box borderRadius={'8px'} overflow={'hidden'} marginTop={'2rem'}>
      <Flex
        width={'100%'}
        background={theme.colors.black['800']}
        padding={'1.5rem'}
        alignItems={'center'}
        flexDirection={[!collapsible ? 'column' : 'row', 'row']}
        onClick={() =>
          collapsible && setOpenDrawer((openDrawer) => !openDrawer)
        }
      >
        {lockIcon && <LockIcon index={index} collapsible={collapsible} />}
        <CardText
          collapsible={collapsible}
          title={title}
          subTitle={subTitle}
          status={status}
          checklist={checks}
          checkedCount={checkCount.length}
        />
        {!collapsible && (
          <Flex cursor={'pointer'}>
            <Link href={`${link}`}>
              <Image
                src={
                  link && link.includes('/checklist')
                    ? '/svgs/rightArrow.svg'
                    : '/svgs/link.svg'
                }
                height={'30'}
                width={'30'}
                alt={'link-svg'}
              />
            </Link>
          </Flex>
        )}
        {collapsible && (
          <Flex flex={'1'} justifyContent={'flex-end'} cursor={'pointer'}>
            <Image
              src={'/svgs/chevDown.svg'}
              height={'18'}
              width={'18'}
              alt={'link-svg'}
            />
          </Flex>
        )}
      </Flex>
      {collapsible && (
        <Flex
          display={'flex'}
          flexDirection={'column'}
          background={theme.colors.black['800']}
          padding={openDrawer ? '0rem 3rem 1.7rem 3rem' : '0 3rem'}
          transition={'0s padding ease, 0.4s all ease'}
          maxHeight={openDrawer ? '10000vh' : '0'}
          height={openDrawer ? 'auto' : '0'}
          overflow={'overhidden'}
          opacity={openDrawer ? '1' : '0.7'}
        >
          <CheckList checklist={checks} setCheckCount={setCheckCount} />
        </Flex>
      )}
    </Box>
  )
}
