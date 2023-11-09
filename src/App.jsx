import React, { useState, useEffect } from 'react';
import { Infos } from './Componants/Infos';

// getting values from local storage
const getDatafromLS = () => {
  const data = localStorage.getItem('Info');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

const App = () => {

  const [Info, setInfo] = useState(getDatafromLS());

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setemail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');

  const handleOnTable = (e) => {
    e.preventDefault();
    // create an object
    let table = {
      FirstName,
      LastName,
      email,
      PhoneNumber
    }
    setInfo([...Info, table]);
    setFirstName('');
    setLastName('');
    setemail('');
    setPhoneNumber('');
  }

  // delete info from LS
  const deletetable = (email) => {
    const filteredInfo = Info.filter((element, index) => {
      return element.email !== email
    })
    setInfo(filteredInfo);
  }

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem('Info', JSON.stringify(Info));
  }, [Info])

  return (
    <div>
      <div className="container">
        <div className="row m-5 p-5 justify-between items-center flex ">
          <div className='w-full'>
            <h1 className='text-3xl m-5 p-5 justify-center items-center'>Enter Your Data</h1>
            <div class="w-full max-w-xs">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleOnTable}>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">
                    First Name
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="enter your firstname" required onChange={(e) => setFirstName(e.target.value)} value={FirstName} />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
                    Last Name
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="enter your lastname" required onChange={(e) => setLastName(e.target.value)} value={LastName} />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="enter your email" required onChange={(e) => setemail(e.target.value)} value={email} />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                    Phone
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="enter your phone number" required onChange={(e) => setPhoneNumber(e.target.value)} value={PhoneNumber} />
                </div>
                <input type="submit" name="Add User" class="items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
              </form>
            </div>
          </div>
          <div className='bg-blue-500 mx-5 p-3 items-center text-center w-full rounded'>
            <div className=' font-bold text-white justify-center items-center text-3xl '>
              {Info.length < 1 && <>No Information are added yet !</>}
            </div>
            {Info.length > 0 && <>
              <div>
                <table className="table-fixed">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Infos Info={Info} deletetable={deletetable} />
                  </tbody>
                </table>
              </div></>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App