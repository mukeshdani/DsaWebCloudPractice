import { Suspense, use } from 'react';

const fetchData = () => fetch('https://dummyjson.com/users').then(res => res.json());

const userResource = fetchData();

export default function UseAPI() {
  return (
    <div>
      <h4>Use API in React JS</h4>
      <Suspense fallback={<p>Loading...</p>}>
        <Users userResource={userResource} />
      </Suspense>
    </div>
  );
}

const Users = ({ userResource }) => {
  const userData = use(userResource); 

  return (
    <div>
      <h4>Users List</h4>
      {userData?.users?.map((user) => (
        <h4 key={user.id}>{user.firstName}</h4>
      ))}
    </div>
  );
};


// what is use API 
// how use api work 
// Example with actual rest api 
// use is an api not hook 
// what is use API 
// Feature in React js 19 
//  use can handle promise and return data from promise 
// We should use `use API` with Suspense 
// `use API` can use to handle context api also 
// `use API` reduce rereading of component as comapre to useEffect 
// use API