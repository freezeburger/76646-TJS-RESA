/* Global Imports */
import  { FC, useEffect, useState } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

/* Local Imports */
import './Home.style.css';


const useTimer = () => {
   const [time, setTime] = useState(Date.now());

   useEffect(() => {
      const interval = setInterval(() => {
         setTime(Date.now());
      }, 1000);

      return () => clearInterval(interval);
   }, []);

   return time;
}

const Timer: FC = () => {
   const time = useTimer();

   return (
      <div>
         <h3>Current Time: {new Date(time).toLocaleTimeString()}</h3>
      </div>
   );
}

interface HomeProps {}

const Home: FC<HomeProps> = () => {

   Hooks.useDocumentTitle('Home View');

   return (
   <div className="Home" data-testid="Home">
      <UI.Header>Home</UI.Header>
      <UI.Main>
         <h2>Home Content</h2>
         <Timer />
         <UI.Button color="blue">TEXTE</UI.Button>
         <UI.Button color="red">TEXTE</UI.Button>
      </UI.Main>
    
      <UI.Footer />
   </div>
   )
};

export default Home;
