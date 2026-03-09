import ApiPosts from '@/Api/Api';
import { div } from 'framer-motion/client';
import React, { useState } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
function Posts() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [col,setCol] = useState<number>(10)
  return (
<div>
        <div className='border-1.5 border-gray-600 rounded-2xl border-1.5 h-15 mt-2 m-8 flex'>

        <div className="m-4">Number</div>
        <div className="ml-[2%] mt-3.5">Title</div>
        <div className='ml-[60%] mt-3.5'>See all text</div>
        </div>

  
<div>
        {ApiPosts().slice(0,col).map(item => (
        <div key={item.id} className='border-1.5 border-black h-25 mt-2 m-8 flex p-8 pl-[-10px] relative rounded-3xl'>
          <div>{item.id}</div>
          <div className='ml-16'>{item.title}</div>
                      <Button color="primary" variant="shadow"  onPress={onOpen} className='absolute right-5'>all text</Button>
      <Modal
        backdrop="opaque"
        classNames={{
          backdrop: "bg-linear-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                {item.body}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light"  onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> 
        </div>
      ))}
  <Button color="success" onClick={()=> setCol(pref=>pref +10)} className='ml-[45%]'>
        plus 10
      </Button>
</div>
    
</div>
  )
}

export default Posts
