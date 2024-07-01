import React from 'react'

const Education = () => {
  return (
    <>
<section id="education" className="ml-5 mr-4 text-blue-700 mt-6">
      <h2 className="font-semibold text-2xl mt">Education</h2>
      <div className="overflow-x-auto mt-6">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2">SI No.</th>
              <th className="border border-black px-4 py-2">Degree</th>
              <th className="border border-black px-4 py-2">Course</th>
              <th className="border border-black px-4 py-2">Institution</th>
              <th className="border border-black px-4 py-2">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-4 py-2">1</td>
              <td className="border border-black px-4 py-2">M.Tech</td>
              <td className="border border-black px-4 py-2">CSE</td>
              <td className="border border-black px-4 py-2">NSS College of Engineering, Palakkad</td>
              <td className="border border-black px-4 py-2">2024</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">2</td>
              <td className="border border-black px-4 py-2">B.Tech</td>
              <td className="border border-black px-4 py-2">CSE</td>
              <td className="border border-black px-4 py-2">Prime College of Engineering, Palakkad</td>
              <td className="border border-black px-4 py-2">2018</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">3</td>
              <td className="border border-black px-4 py-2">Plus Two</td>
              <td className="border border-black px-4 py-2">CS</td>
              <td className="border border-black px-4 py-2">GHSS Koduvayoor</td>
              <td className="border border-black px-4 py-2">2014</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">4</td>
              <td className="border border-black px-4 py-2">10th</td>
              <td className="border border-black px-4 py-2">General Education</td>
              <td className="border border-black px-4 py-2">GMRHSS Thrithala</td>
              <td className="border border-black px-4 py-2">2012</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  
    </>
  )
}

export default Education