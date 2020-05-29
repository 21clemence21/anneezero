import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const Home = () => {

    const [modules, setModules] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        api.get('module/modulesWithSkills')
        .then(res => {
            setModules(res.data);
            console.log(res.data);
            setIsLoaded(true);
        })

        .catch(err => {
            setError(err.response.message);
        })
      
    }, []);

    return(
       <>
       <h1>Mon arbre de competences</h1>
        
{ isLoaded ||  <h1>isloading</h1> }
{console.log(modules)}


{modules && modules.map(module => {
    return(
        <div key={`mod${module.module.id}`}>
            <h2>{module.module.id}</h2>
            <h3>{module.module.title}</h3>

            {module.skills.map(skill => {
                return(
                    <div key={`skill${skill.id}`} >
                        <h4>{skill.title}</h4>
                    </div>
                )
            })}
        </div>
    )
})

}

    
       </>
       
    )
}

export default Home;