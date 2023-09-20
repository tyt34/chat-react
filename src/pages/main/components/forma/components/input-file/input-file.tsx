import React, { FC, useEffect } from 'react'
import { textForFile } from '../../../../../../shared/constants/main'
import './input-file.scss'

interface Props {
  inputFile: any
  setNameFile: (name: string) => void
  nameFile: string
  setImgInBase64: (base64: string) => void
}

export const InputFile: FC<Props> = ({
  inputFile,
  setNameFile,
  nameFile,
  setImgInBase64
}: Props) => {
  const handleChange = (): void => {
    if (inputFile.current?.files?.[0] !== undefined) {
      setNameFile(inputFile.current?.files?.[0].name)
    }
  }

  const handleClick = (): void => {
    inputFile.current.value = ''
    setNameFile(textForFile)
  }

  console.log({ nameFile })

  const classText =
    nameFile === textForFile
      ? 'forma__prev-text'
      : 'forma__prev-text forma__prev-text-changed'

  useEffect(() => {
    if (inputFile.current?.files?.[0] !== undefined) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setImgInBase64(reader.result as string)
      })
      reader.readAsDataURL(inputFile.current?.files?.[0])
    }
  }, [inputFile.current?.files?.[0]])

  return (
    <section className="forma__input-send">
      <label
        id="label-input"
        className="forma__input-label"
        htmlFor="send-image"
        onClick={handleClick}
      >
        <p>Прикрепить картинку</p>
      </label>
      <input
        onChange={handleChange}
        ref={inputFile}
        id="send-image"
        className="forma__input"
        type="file"
        accept=".png,.jpeg,.ico,.gif,.jpg"
      />
      <div className="forma__input-prev">
        <p className={classText}>{nameFile}</p>
      </div>
    </section>
  )
}
