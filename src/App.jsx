import { useState } from 'react'
import './App.css'
import ListData from './components/ListData'
function App() {
  const [search, setSearch] = useState('');
  
  return (
    <>
    <div>
      <h1>Search for your Favorite Pet by Animal</h1> //Title
      <input type="text" placeholder='Search for animal...'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/> //event listener for change in input field
    </div>
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm"> //Table formatting
      <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-center font-semibold text-gray-900">
              Image
            </th>
            <th scope="col" className="px-6 py-3 text-center font-semibold text-gray-900">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-center font-semibold text-gray-900">
              Species
            </th>
            <th scope="col" className="px-6 py-3 text-center font-semibold text-gray-900">
              Age
            </th>
           <th scope="col" className="px-6 py-3 text-left font-semibold text-gray-900">
              Fun Fact
            </th>
          </tr>
        </thead>
        <tbody>
          <ListData value={search}/> //inputting value from input into ListData Component
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App
