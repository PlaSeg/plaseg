import Dropzone, { DropzoneState } from 'shadcn-dropzone';
import { FC } from 'react';
import {
	ImageIcon
} from "lucide-react";

type DropzoneProps = {
  onDrop: (acceptedFiles: File[]) => void;
};

export const DefaultUI: FC<DropzoneProps> = ({ onDrop }) => {
  return <Dropzone onDrop={onDrop} />;
};

export const CustomUI: FC<DropzoneProps> = ({ onDrop }) => {
  return (
    <Dropzone onDrop={onDrop}>
      {(dropzone: DropzoneState) => (
        <>
            <div className='h-[150px] justify-center items-center flex'>
                {dropzone.isDragAccept ? (
                <div className='text-sm font-medium'>Drop your files here!</div>
                ) : (
                <div className='flex items-center flex-col gap-1.5'>
                    <div className='flex items-center flex-row gap-0.5 text-sm font-medium'>
                        <ImageIcon/>
                    </div>
                    <div className='flex items-center flex-row gap-0.5 text-sm font-medium'>
                        Carregue sua imagem aqui
                    </div>
                </div>
                )}
            </div>
        </>
      )}
    </Dropzone>
  );
};