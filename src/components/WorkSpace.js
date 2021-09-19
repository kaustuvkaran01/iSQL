import React from 'react'

import {FaFolder,FaHistory} from 'react-icons/fa';
import {SiPostgresql} from 'react-icons/si';
import {IoIosStats} from 'react-icons/io'
export default function WorkSpace() {
  return (
    <div className="flex flex-row h-full">
      <div className="w-1/3 h-full bg-amber-400 flex flex-row">
        <div className="w-1/5 flex flex-col space-y-8 border-r-2 border-green-500 text-pink-600">
          <div className="w-full flex flex-col justify-center items-center text-center py-4">
            <FaFolder size={40}/>
            <p>Data</p>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-center py-4">
            <SiPostgresql size={40}/>
            <p>Queries</p>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-center py-4">
            <IoIosStats size={40}/>
            <p>Stats</p>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-center py-4">
            <FaHistory size={40}/>
            <p>History</p>
          </div>
        </div>
        <div className="w-4/5 py-4">
          Left Right
        </div>
      </div>
      <div className="w-2/3 h-full bg-pink-600 py-4">
        Right
      </div>
    </div>
  )
}
