import { useEffect, useState } from "react";

const ProfileComponent = (props) => {
  const [count, setCount] = useState(0);
  const [count1] = useState(1);
  useEffect(() => {
    const timer =setInterval(() => {
        console.log("setInterval");
    }, 1000);
    console.log("useEffect executed !!");
    return () => {
        console.log('destrying component');
        clearInterval(timer);
    }
  }, []);
  return (
    <div>
      <h3>Functional Profile Component</h3>
      <h4>{props.name}</h4>
      <h4>{count}</h4>
      <h4>{count1}</h4>
      <button onClick={() => setCount(50)}>click</button>
    </div>
  );
};

export default ProfileComponent;
