
 import { Routes, Route } from 'react-router-dom'
 import Users from './components/users'
 import User from './components/user'

 function App() {
   return (
     <Routes>
       <Route path='/users' element={<Users />} />
       <Route path='/users/:id' element={<User />} />
     </Routes>
   )
 }

 export default App;
