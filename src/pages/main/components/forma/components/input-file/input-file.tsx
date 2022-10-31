import React, { FC, useEffect } from 'react'
import { textForFile } from '../../../../../../shared/constants/main'

interface Props {
  inputFile: any
  setNameFile: (name: string) => void
  nameFile: string
  setImgInBase64: (base64: any) => void
}

const InputFile: FC<Props> = ({ inputFile, setNameFile, nameFile, setImgInBase64 }: Props) => {
  const handleChange = (): void => {
    if (inputFile.current?.files?.[0] !== undefined) {
      setNameFile(inputFile.current?.files?.[0].name)
    }
  }

  const handleClick = (): void => {
    inputFile.current.value = null
    setNameFile(textForFile)
  }

  useEffect(() => {
    if (inputFile.current?.files?.[0] !== undefined) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setImgInBase64(reader.result)
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
        <p>
          Прикрепить картинку
        </p>
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
        <p className="forma__prev-text">
          {nameFile}
        </p>
      </div>
    </section>
  )
}

export default InputFile