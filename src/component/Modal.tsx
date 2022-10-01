import React from "react";
type ModalProps = {
    openModal: boolean;
    setOpenModal:(val: boolean) => void;
}

export default function Modal(props:ModalProps) {
//   const [showModal, setShowModal] = React.useState(false);
    const {  openModal,setOpenModal } = props
  return (
    <>
      {openModal ? (
        <>
          <div className="fixed top-30 left-400 z-50  w-765 h-635 bg-white">
            <div className="flex flex-col justify-around items-center w-275 h-full bg-light-75 py-40">
                <div className="text-center">
                  <span className="w-75 h-75 bg-warning-400 border-solid border-2 border-warning-400 rounded-12 text-32 text-white font-normal px-30 py-18">1</span>
                  <h6 className="text-14 text-light-400 font-medium mt-20">Account Info</h6> 
                </div>
                <span className="border-l-4 border-warning-400 h-65"/>
                <div className="text-center">
                  <span className="w-75 h-75 bg-transparent border-solid border-2 border-light-400 rounded-12 text-32 text-light-400 font-normal px-30 py-18">2</span>
                  <h6 className="text-14 text-light-400 font-medium mt-20">Payment Method</h6> 
                </div>
                <span className="border-l-4 border-light-400 h-65"/>
                <div className="text-center">
                  <span className="w-75 h-75 bg-transparent border-solid border-2 border-light-400 rounded-12 text-32 text-light-400 font-normal px-30 py-18">3</span>
                  <h6 className="text-14 text-light-400 font-medium mt-20">Order Review</h6> 
                </div>
            </div>
            <div>
              <div className="px-35 py-35">
                
              </div>
            </div>
          </div>
          
        </>
      ) : null}
    </>
  );
}