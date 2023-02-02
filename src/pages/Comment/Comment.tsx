import React, { useState } from "react";
import Textarea from "../../components/Input/Textarea";
import ModalBase from "../../components/Modal/ModalBase";

type Props = {};

const Comment = (props: Props) => {
  const [openModalBase, setOpenModalBase] = useState<boolean>(false);
  return (
    <div id="comment">
      <button
        onClick={() => {
          setOpenModalBase(true);
        }}
        className="p-5 rounded-lg text-center text-white bg-blue-400"
      >
        Open modal base
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => {
          setOpenModalBase(false);
        }}
      >
        <div className="relative bg-white min-w-[1280px]  rounded-md shadow-lg">
          <button
            onClick={() => {
              setOpenModalBase(false);
            }}
            className="absolute px-3 py-1 rounded-full top-0 right-0 -translate-y-2/4 translate-x-2/4 bg-error bg-opacity-20 hover:bg-opacity-50 transition-all ease-linear cursor-pointer"
          >
            <i className="fa-solid fa-xmark text-3xl text-red-600"></i>
          </button>
          <div className="px-12 pt-7 pb-4 flex items-center justify-between">
            <div className="flex items-baseline gap-x-2">
              <i className="fa-solid fa-square-check text-blue-500"></i>
              <span>Title of task</span>
            </div>
            <div className="flex items-center gap-x-8">
              <button className="flex items-baseline justify-center gap-2 text-[#42526e] bg-gray-300 px-3 py-1 hover:bg-gray-400 rounded transition-all ease-linear">
                <i className="fa-regular fa-paper-plane "></i>
                <span>Give Feedback</span>
              </button>
              <button className="flex items-baseline justify-center gap-2 text-[#42526e] bg-gray-300 px-3 py-1 hover:bg-gray-400 rounded transition-all ease-linear">
                <i className="fa-solid fa-link"></i>
                <span>Link Issue</span>
              </button>
              <button className="flex items-center justify-center hover:bg-error hover:bg-opacity-20 hover:text-error transition-all ease-linear w-10 h-10 rounded text-xl">
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
          <div className=" flex items-start justify-between pl-8 pr-5 pb-8">
            <div className="w-[60%] overflow-x-hidden overflow-y-auto max-h-[500px]">
              <h1 className="font-medium text-2xl text-[#172b4d]">
                Bài tập cuối khóa
              </h1>
              <Textarea placeholder="Add a comment..."></Textarea>
            </div>
            <div className="w-[40%] overflow-x-hidden overflow-y-auto max-h-[500px]"></div>
          </div>
        </div>
      </ModalBase>
    </div>
  );
};

export default Comment;
